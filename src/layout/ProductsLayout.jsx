import {
  NavLink,
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

import BreadcrumbArrow from "../components/UI/BreadscrumbArrow";
import React from "react";

const ProductsLayout = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  let queryEntries = Array.from(searchParams.entries());
  queryEntries = [...queryEntries.slice(1).map((array) => array)];

  const location = useLocation();
  const pathUrl = location.search;

  if (queryEntries.length <= 0) {
    queryEntries.push(["Category", params.category]);
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ul className="flex gap-[1rem] py-[2.5rem] px-[10rem] text-[#A4A4A4]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {queryEntries.map(([key, value], index) => (
            <React.Fragment key={index}>
              <BreadcrumbArrow />

              {key === "Category" && <span>{key}</span>}
              {key === "Category" && <BreadcrumbArrow />}
              {key === "Brand" && <span>{value}</span>}

              {key !== "Brand" && (
                <NavLink
                  to={key === "Category" ? `/products/${value}` : `${pathUrl}`}
                  className="last:text-black last:font-semibold"
                >
                  {value}
                </NavLink>
              )}
            </React.Fragment>
          ))}
          {/* {queryEntries.map(([key, value], index) => {
            return index === 0 ? (
              <li key={index} className="flex gap-[1rem]">
                <BreadsCrumbArrow />

                <span>{key}</span>

                <BreadsCrumbArrow />

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-black medium" : ""
                  }
                  to={`/products/${value}`}
                  end
                >
                  {value}
                </NavLink>
              </li>
            ) : (
              <li key={index} className="flex gap-[1rem]">
                <BreadsCrumbArrow />

                {index === 2 ? (
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-black medium" : ""
                    }
                    to={`${pathUrl}`}
                    end
                  >
                    {value}
                  </NavLink>
                ) : (
                  <span>{value}</span>
                )}
              </li>
            );
          })} */}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default ProductsLayout;
