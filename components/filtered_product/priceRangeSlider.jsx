import { setPriceRange } from "@/lib/store/slices/filterSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Range } from "react-range";

export const PriceRangeSlider = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector(
    (state) => state.manageFilterSlice.priceRange
  );

  const STEP = 1;
  const MIN = min; // Set to a reasonable default or from your state
  const MAX = max; // Set to a reasonable default or from your state 

  // Local state to control slider
  const [sliderValues, setSliderValues] = useState([min, max]);

  // Update slider when Redux state changes
  useEffect(() => {
    setSliderValues([min, max]);
  }, [min, max]);

  const handlePriceChange = (values) => {
    const [minPrice, maxPrice] = values;
    setSliderValues(values); // Update local state to reflect slider change
    dispatch(setPriceRange({ min: minPrice, max: maxPrice }));
  };

  return (
    <div className="price-range grid gap-4 mt-9">
      <h2 className="text-base font-medium text-primary_blue">Price</h2>
      <p className="tracking-wide leading-normal text-xs">Select Price Range</p>

      {/* Display the selected min and max values */}
      <div className="flex justify-between">
        <span>NPR.{sliderValues[0]}</span> <span>NPR.{sliderValues[1]}</span>
      </div>

      {/* Dual Handle Slider */}
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={sliderValues} // Local state controlling the slider
        onChange={handlePriceChange} // Handle slider change
        renderTrack={({ props, children }) => (
          <div
            key={props.key}
            {...props}
            style={{
              ...props.style,
              height: "6px",
              width: "100%",
              backgroundColor: "gray",
              borderRadius: "10px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            key={props.key}
            {...props}
            style={{
              ...props.style,
              height: "24px",
              width: "24px",
              borderRadius: "12px",
              backgroundColor: "#110884",
              boxShadow: "0px 2px 6px #AAA",
            }}
          />
        )}
      />
    </div>
  );
};
