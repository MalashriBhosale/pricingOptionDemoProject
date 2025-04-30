import React, { useState } from "react";
import Box from '@mui/material/Box';
import { Divider } from "@mui/material";
const PricingOptions = () => {
  const [selectedOption, setSelectedOption] = useState("2");

  return (
    <div className="pricing-container">
      <Box component="section" sx={{ p: 1, border: '1px dashed grey' }}>
        <Divider className="section-title">
          <span className="divider-text">YAY! It's BOGO</span>
        </Divider>
        <div className="option-card">
          <label className="option">
            <input
              type="radio"
              name="unit"
              value="1"
              checked={selectedOption === "1"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <div className="info">
              <span className="section-title">1 Unit</span>
              <span className="discount">10% Off</span>
              <span className="price">$10.00 USD</span>

              <div className="subtext">Standard Price
                <span className="old-price">$24.00 USD</span>
              </div>

            </div>
          </label>

          <label className="option most-popular">
            <input
              type="radio"
              name="unit"
              value="2"
              checked={selectedOption === "2"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <div className="info">
              <span className="section-title">2 Unit <span className="discount">20% Off</span></span>
              {/* <span className="price">
                $18.00 USD <span className="old-price">$24.00 USD</span>
              </span> */}

              <span className="selectors">
                <div className="selector">
                  <label>
                    #1
                    <select style={{ width: '80px', height: '20px', fontSize: '10px' }} name="size1" defaultValue="S">
                      <option value="S">S</option>
                    </select>
                  </label>
                  <select style={{ width: '80px', height: '20px', fontSize: '10px' }} name="color1" defaultValue="black">
                    <option value="black">Black</option>
                  </select>

                </div>
                <div className="selector">
                  <label>
                    #2
                    <select style={{ width: '80px', height: '20px', fontSize: '10px' }} name="size2" defaultValue="S">
                      <option value="S">S</option>
                    </select>
                  </label>
                  <select style={{ width: '80px', height: '20px', fontSize: '10px' }} name="color2" defaultValue="colour">
                    <option value="colour">Colour</option>
                  </select>
                </div>
              </span>
            </div>
            <span className="price-container">
              <div className="priceForUnit">$18.00 USD </div>
              <div className="old-priceForUnit">$24.00 USD</div>
            </span>
          </label>
          <label className="option">
            <input
              type="radio"
              name="unit"
              value="3"
              checked={selectedOption === "3"}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <div className="info">
              <span className="section-title">3 Unit <span className="discount">30% Off</span></span>
            </div>
            <div className="price-container">
              <div className="price">$24.00 USD</div>
              <div className="old-price">$24.00 USD</div>
            </div>

          </label>
        </div>

        <div className="summary">
          <span>Free Delivery</span>
          <span>Total: <b>${selectedOption === "1" ? "10.00" : selectedOption === "2" ? "18.00" : "24.00"} USD</b></span>
        </div>

        <button className="add-to-cart">+ Add to Cart</button>
        <footer style={{ textAlign: "right", fontStyle: "italic", marginTop: "1rem", fontSize: "12px", color: "#888" }}>
          © Powered by Pumper
        </footer>
      </Box>
    </div>
  );
};

export default PricingOptions;