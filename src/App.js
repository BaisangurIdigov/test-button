import { Box, Button } from '@material-ui/core'
import { useState } from 'react'

function App() {
  const [buttons, setButtons] = useState(false)
  const [num, setNum] = useState(1)

  const handleMainClick =()=> {
    setButtons(!buttons)
  }

  return (
    <div style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Box style={{textAlign: 'center'}}>
        <Button style={{ margin: 10 }} variant="contained" color="primary" onClick={handleMainClick}>{num}</Button>
        {buttons ?
          <Box>
            <Button style={{ margin: 10 }} variant="contained" onClick={()=>setNum(1)}>1</Button>
            <Button style={{ margin: 10 }} variant="contained" onClick={()=>setNum(2)}>2</Button>
            <Button style={{ margin: 10 }} variant="contained" onClick={()=>setNum(3)}>3</Button>
          </Box>
          : ""
        }
      </Box>
    </div>
  );
}

export default App;
