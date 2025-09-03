import { Box } from "@mui/material";
import { UseState } from "./hooks/UseState";
import { UseEffect } from "./hooks/UseEffect";

const App: React.FC = () => {
  return (
    <Box>
      <UseState />
      <UseEffect />
    </Box>
  )
}

export default App;