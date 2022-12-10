import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid,
  Tabs,
  TabList,
  Tab,
  Menu,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import FilterCategory from "../../InputFilter/FilterCategory";
import FilterDifficulty from "../../InputFilter/FilterDifficulty";
import FilterDuration from "../../InputFilter/FilterDuration";
import OrderPrice from "../../InputOrder/OrderPrice";
import OrderPublished from "../../InputOrder/OrderPublished";
import OrderStar from "../../InputOrder/OrderStar";
import {
  getCourses,
  orderByRating,
  orderByPrice,
  orderByPublished,
} from "../../../Redux/actions/index";

function Filter() {
  let [order, setOrder] = useState("");

  const dispatch = useDispatch();
  function handleOrderByName(e) {
    e.preventDefault();
    dispatch(getCourses(e.target.value));
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
                      <PopoverCloseButton />
                      <PopoverBody>
                        <FilterCategory handleOrderByName={handleOrderByName}/>
                      </PopoverBody>
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
                      <PopoverCloseButton />
                      <PopoverBody>
                        <FilterDifficulty />
                      </PopoverBody>
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
                      <PopoverCloseButton />
                      <PopoverBody>
                        <FilterDuration />
                      </PopoverBody>
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
                      <PopoverCloseButton />
                      <PopoverBody>
                        <OrderPrice handleOrderByPrice={handleOrderByPrice} />
                      </PopoverBody>
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
                      <PopoverCloseButton />
                      <PopoverBody>
                        <OrderPublished handleOrderByPublished={handleOrderByPublished} />
                      </PopoverBody>
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
                      <PopoverCloseButton />
                      <PopoverBody>
                         <OrderStar handleOrderByStar={handleOrderByStar} />
                      </PopoverBody>
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
