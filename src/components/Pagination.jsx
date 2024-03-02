import React from "react"
import { CardFooter, Button, IconButton } from "@material-tailwind/react"

const Pagination = () => {
  return (
    <CardFooter className="flex mx-auto items-center justify-between border-t border-blue-gray-50  p-4">
      <Button variant="outlined" size="sm">
        Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton variant="outlined" size="sm">
          1
        </IconButton>
        <IconButton variant="text" size="sm">
          2
        </IconButton>
        <IconButton variant="text" size="sm">
          3
        </IconButton>
        <IconButton variant="text" size="sm">
          ...
        </IconButton>
        <IconButton variant="text" size="sm">
          8
        </IconButton>
        <IconButton variant="text" size="sm">
          9
        </IconButton>
        <IconButton variant="text" size="sm">
          10
        </IconButton>
      </div>
      <Button variant="outlined" size="sm">
        Next
      </Button>
    </CardFooter>
  )
}

export default Pagination
