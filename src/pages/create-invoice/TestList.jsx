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

//////////////////////////// Redux Toolkit /////////////////////////////

// import { Checkbox } from "@material-tailwind/react"
// import { useDispatch, useSelector } from "react-redux"
// import { setCheckedTest } from "../../store/invoiceSlice"

// const testList = [
//   { name: "Blood Test 1", price: 300 },
//   { name: "Blood Test 2", price: 300 },
//   { name: "Blood Test 3", price: 300 },
//   { name: "CBC", price: 200 },
//   { name: "RBC", price: 350 },
//   { name: "ECG", price: 200 },
// ]
// const TestList = () => {
//   const dispatch = useDispatch()
//   const onChange = test => {
//     dispatch(setCheckedTest(test))
//   }

//   return (
//     <>
//       <h2 className="w-full mx-auto text-left text-2xl">Select Test(s)</h2>
//       <div className="flex flex-wrap justify-start items-center">
//         {testList.map((test) => (
//           <Checkbox key={test.name} label={test.name} value={test.name} onChange={() => onChange(test)} />
//         ))}
//       </div>
//     </>
//   )
// }

// export default TestList
