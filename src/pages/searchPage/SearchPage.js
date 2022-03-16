import React, { useContext, useMemo } from "react";
import { GlobalStateContext } from "../../components/Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { PageContainer } from "./styled";
import { useInput } from "../../hooks/useForm";
import FeedCard from "../../components/FeedCard/FeedCard";
import { TextField } from "@material-ui/core";

const SearchPage = () => {
  const { states } = useContext(GlobalStateContext);
  const { input, onChangeInput } = useInput({ search: "" });
  const navigate = useNavigate();

  const goToFeed = () => {
    navigate(`/Home`);
  };
  const goToRestaurantDetail = (id) => {
    navigate(`/restaurante/${id}`);
  };

  const searchRestaurants = useMemo(() => {
    const lowerSearch = input.search.toLowerCase();
    return (
      input.search &&
      states.restaurants?.filter((item) => {
        return item.name.toLowerCase().includes(lowerSearch);
      })
    );
  }, [input.search]);

  const renderRestaurants =
    input.search && searchRestaurants.length > 0
      ? searchRestaurants?.map((item, i) => {
          return (
            <FeedCard
              key={i}
              restaurants={item}
              onClickRestaurant={() => goToRestaurantDetail(item.id)}
            />
          );
        })
      : input.search &&
        !searchRestaurants.length && (
          <p>Desculpe... Não encontrei o que procura.</p>
        );

  return (
    <div>
      <PageContainer>
        <TextField
          variant="outlined"
          placeholder={"  Restaurantes"}
          type="text"
          onChange={onChangeInput}
          value={input.search}
          name={"search"}
        />
        <div>
        {renderRestaurants ? (
          renderRestaurants
        ) : (
          <p>busque por nome de restaurante</p>
        )}
        </div>
      </PageContainer>
      <Footer />
    </div>
  );
};
export default SearchPage;
