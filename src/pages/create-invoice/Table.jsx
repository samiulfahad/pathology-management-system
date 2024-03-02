import { Card, Typography } from "@material-tailwind/react"

const Table = ({ Head, Rows }) => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {Head.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Rows.map((row, index) => {
            const isLast = index === Rows.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50"

            return (
              <tr key={index}>
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {cell}
                    </Typography>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </Card>
  )
}

export default Table
