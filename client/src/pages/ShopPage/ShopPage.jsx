import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/CollectionsOverview/CollectionsOverview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../CollectionPage/CollectionPage.container")
);
const ShopPage = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
