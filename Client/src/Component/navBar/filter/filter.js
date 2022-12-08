import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  ButtonGroup,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  PopoverFooter
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import FilterCategory from "../../InputFilter/FilterCategory";
import FilterDifficulty from "../../InputFilter/FilterDifficulty";
import FilterDuration from "../../InputFilter/FilterDuration";
import OrderPrice from "../../InputOrder/OrderPrice";
import OrderPublished from "../../InputOrder/OrderPublished";
import OrderStar from "../../InputOrder/OrderStar";
import {
  orderByName,
  orderByRating,
  orderByPrice,
  orderByPublished,
} from "../../../Redux/actions/index";

function Filter() {
  let [order, setOrder] = useState("");

  const dispatch = useDispatch();
  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder("order" + e.target.value);
  }

  function handleOrderByPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setOrder("order" + e.target.value);
  }

  function handleOrderByPublished(e) {
    e.preventDefault();
    dispatch(orderByPublished(e.target.value));
    setOrder("order" + e.target.value);
  }

  function handleOrderByStar(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setOrder("order" + e.target.value);
  }

  return (
    <Grid templateColumns="repeat(6, 23%) ">
      <Tabs>
        <TabList p={0}>
          <Tab p={0}>
            <Menu>
                <Popover>
                  <PopoverTrigger >
                    <Button background='none' p={0}>Category</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <FilterCategory />
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Menu>
          </Tab>
          <Tab p={0}>
          <Menu>
                <Popover>
                  <PopoverTrigger>
                    <Button background='none'>Difficulty</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <FilterDifficulty />
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Menu>
          </Tab>

          <Tab p={0}>
          <Menu>
                <Popover>
                  <PopoverTrigger>
                    <Button background='none'>Duration</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <FilterDuration />
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Menu>
          </Tab>

          <Tab p={0}>
          <Menu>
                <Popover>
                  <PopoverTrigger>
                    <Button background='none'>Price</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <OrderPrice handleOrderByPrice={handleOrderByPrice} />
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Menu>
          </Tab>
          <Tab p={0}>
          <Menu>
                <Popover>
                  <PopoverTrigger>
                    <Button background='none'>Publiced</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <OrderPublished handleOrderByPublished={handleOrderByPublished} />
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Menu>
          </Tab>
          <Tab p={0}>
          <Menu>
                <Popover>
                  <PopoverTrigger>
                    <Button background='none'>Start</Button>
                  </PopoverTrigger>
                  <Portal>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverHeader>Header</PopoverHeader>
                      <PopoverCloseButton />
                      <PopoverBody>
                        <OrderStar handleOrderByStar={handleOrderByStar} />
                      </PopoverBody>
                      <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                  </Portal>
                </Popover>
            </Menu>
          </Tab>
          <Tab p={0}>
          <Popover>
                  <PopoverTrigger>
                      <Link to="/crear" className="linkStart">
                        crear
                      </Link>
                  </PopoverTrigger>
            </Popover>
          </Tab>
        </TabList>
      </Tabs>
    </Grid>
  );
}

export default Filter;
