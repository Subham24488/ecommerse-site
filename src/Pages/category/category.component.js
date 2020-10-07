import React from "react";
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selector";
import "./category.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollections(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
