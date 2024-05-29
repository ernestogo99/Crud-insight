import { Flare } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Cadastrar = () => {
  const [nome, setnome] = useState("");
  const [cnpj, setcnpj] = useState("");
  const [seg_atuacao, setSegmento] = useState("TI");
  function handlesubmit(event) {
    event.preventDefault();
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "31.8rem",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ mt: 1 }} align="center" variant="h5" fontWeight="bold">
        Cadastrar Fornecedor
      </Typography>
      <Box component="form" onSubmit={handlesubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="nome"
          name="nome"
          label="Nome do Fornecedor"
          autoFocus
          onChange={(event) => setnome(event.target.value)}
        ></TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="cnpj"
          name="cnpj"
          label="Cnpj do fornecedor"
          onChange={(event) => setcnpj(event.target.value)}
        ></TextField>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="atuacao">Segmento de atuação</InputLabel>
          <Select
            labelid="atuacao"
            label="Segmento de atuação"
            value={seg_atuacao}
            onChange={(event) => setSegmento(event.target.value)}
          >
            <MenuItem value="TI">Tecnologia da informação</MenuItem>
            <MenuItem value="CC">Construção civil</MenuItem>
            <MenuItem value="OA">Outra área</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" sx={{ my: 3 }}>
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cadastrar;
