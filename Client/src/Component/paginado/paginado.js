import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Paginado({ pagina, setPagina, maximo }) {
  let init = 0;
  const page = [];
  const pageLimit = [0];

  const [previusPageLimit, setPreviusPageLimit] = useState(0);
  const [nextPageLimit, setNextPage] = useState(5);

  for (let i = 1; i <= maximo; i++) {
    if (init <= maximo) {
      init += 5;
      pageLimit.push(init);
    }
    page.push(i);
  }

  const nextPage = () => {
    setPagina(pagina + 1);

    if (pagina >= maximo) {
      setPagina(1);
      setPreviusPageLimit(0);
      setNextPage(5);
    } else if (pageLimit.includes(pagina)) {
      setPreviusPageLimit(previusPageLimit + 5);
      setNextPage(nextPageLimit + 5);
    }
  };
  const previusPage = () => {
    if (pagina <= 1) {
      setPagina(maximo);
      setPreviusPageLimit(maximo - 5);
      setNextPage(maximo);
    } else if (pageLimit.includes(pagina - 1)) {
      setPreviusPageLimit(previusPageLimit - 5);
      setNextPage(nextPageLimit - 5);
      setPagina(pagina - 1);
    } else {
      setPagina(pagina - 1);
    }
  };

  const onChange = (e) => {
    setPagina(Number(e.target.value));
  };

  return (
    <>
      <ButtonGroup variant="outline" spacing="6">
        <Button
          background="#023e8a"
          color="white"
          border="2px"
          borderColor="white"
          borderRadius="12px"
          onClick={previusPage}
          _hover={{border:0, background:"#023e8a"}}
        >
          Prev.
        </Button>
      </ButtonGroup>
      {page.map((value) => {
        return (
          <ButtonGroup variant="outline" spacing="6" p={1}>
            <Button
              background="#023e8a"
              color="white"
              border="2px"
              borderColor="white"
              borderRadius="12px"
              onClick={onChange}
              value={value}
              _hover={{border:0, background:"#023e8a"}}
            >
              {value}
            </Button>
          </ButtonGroup>
        );
      })}
      <Button
        background="#023e8a"
        color="white"
        border="2px"
        borderColor="white"
        borderRadius="12px"
        onClick={nextPage}
        _hover={{border:0, background:"#023e8a"}}
      >
        Next
      </Button>
    </>
  );
}

export default Paginado;
