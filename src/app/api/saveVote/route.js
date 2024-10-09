import clientPromise from '../../mongodb'; // Ajuste o caminho conforme sua estrutura

export async function POST(request) {
  try {
    const client = await clientPromise; // Aguarda a conexão
    const db = client.db('votamostra'); // Substitua pelo nome do seu banco de dados

    if (!db) {
      throw new Error('Banco de dados não definido.');
    }

    const data = await request.json();

    // Exemplo de inserção no banco de dados
    const result = await db.collection('votes').insertOne(data);

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    return new Response("Erro ao salvar o voto", { status: 500 });
  }
}
