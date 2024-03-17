import { Checkbox } from "@material-tailwind/react"

const TestList = ({ list, onChange }) => {
  return (
    <>
      <h2 className="w-full mx-auto text-left text-2xl">Select Test(s)</h2>
      <div className="flex flex-wrap justify-start items-center">
        {list.map((test) => (
          <Checkbox key={test.name} label={test.name} value={test.name} onChange={() => onChange(test)} />
        ))}
      </div>
    </>
  )
}

export default TestList
