import clientPromise from '../../mongodb';

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db('votamostra');

    if (!db) {
      throw new Error('Banco de dados não definido.');
    }

    const data = await request.json();

    // Tenta inserir os dados e captura o erro em caso de duplicidade
    try {
      const result = await db.collection('votes').insertOne(data);
      return new Response(JSON.stringify(result), { status: 200 });
    } catch (error) {
      if (error.code === 11000) {
        // Retorna uma resposta com status 409 (conflito) em caso de CPF duplicado
        return new Response(JSON.stringify({ message: 'CPF já votou' }), { status: 409 });
      }
      throw error;
    }
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    return new Response('Erro ao salvar o voto', { status: 500 });
  }
}
