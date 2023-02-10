import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const loop = [0, 1, 2, 3, 4, 5, 6]

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loop.map((item) => (
              <tr key={item}>
                <td>Nome da Tarefa</td>
                <td>3 minutos</td>
                <td>Há 2 meses</td>
                <td>
                  <Status statusColor="green">Concluído</Status>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
