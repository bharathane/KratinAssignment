import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

class FoodDiet extends Component {
  render() {
    return (
      <div className="foodDiet">
        <Header />
        <div className="browserContainer">
          <div className="whoContainer">
            <img
              src="https://images.news9live.com/h-upload/2022/04/07/281517-world-health-organization.jpg?w=663"
              alt="WHO"
              className="logoSize"
            />
            <h1 className="whoHeading">WHO - World Health Organization</h1>
            <p className="whoPara">
              Should do at least 150 minutes of moderate-intensity physical
              activity throughout the week, or at least 75 minutes of
              vigorous-intensity physical activity, or an equivalent combination
              of both. For additional health benefits, they should increase
              moderate-intensity physical activity to 300 minutes per week, or
              equivalent...
            </p>
            <button type="button" className="buttonRead">
              <a
                href="https://www.emro.who.int/health-education/physical-activitiy/promoting-physical-activity/What-is-the-recommended-amount-of-exercise.html"
                target="blank"
                className="link"
              >
                Read More
              </a>
            </button>
          </div>
          <div className="foodContainer">
            <h1 className="foodContainerHeading">Food Recommendation:</h1>
            <p className="Details">
              As you become older, the foods and drinks that make up a healthy
              diet for you may be slightly different from when you were younger.
            </p>

            <div>
              <h1>For Healthy Person</h1>
              <div className="foodItemContainer">
                <img
                  src="https://post.healthline.com/wp-content/uploads/2020/08/benefits-of-wholegrains-1200x628-facebook-1200x628.jpg"
                  alt="WholeGrains"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Whole Grains</h1>
                  <p className="Details">
                    Including whole grains such as brown rice, quinoa, bran
                    flakes and whole-grain breads increases the fibre content in
                    your body.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/whole-grains"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="foodItemContainer">
                <img
                  src="https://journal.lyka.com.au/wp-content/uploads/2022/11/journal-broccoli-feature.jpg"
                  alt="Broccoli"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Broccoli</h1>
                  <p className="Details">
                    Another superfood, broccoli contains compounds that helps in
                    preventing breast cancer. Enriched in vitamin C and A, it
                    has low calorie content.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/organic-vegetables"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="foodItemContainer">
                <img
                  src="https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/06/cover-milk-1.jpg?fit=1200%2C675&ssl=1"
                  alt="Milk"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Milk</h1>
                  <p className="Details">
                    High in calcium, potassium, vitamin B12 and riboflavin, milk
                    also gives you healthy bones, teeth and a glowing skin. Milk
                    can lower the risk of breast cancer and colon cancer too.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://sidsfarm.com/"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="foodItemContainer">
                <img
                  src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
                  alt="Fruit"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Fruits</h1>
                  <p className="Details">
                    Fruits are an excellent source of essential vitamins and
                    minerals, and they are high in fiber. Fruits also provide a
                    wide range of health-boosting antioxidants, including
                    flavonoids.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/fruits"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <h1>For Diabetes Person</h1>
              <div className="foodItemContainer">
                <img
                  src="https://eatingrules.com/wp-content/uploads/2016/10/How-to-Cook-Dried-Beans-sq.jpg"
                  alt="Dried Beans"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Dried Beans</h1>
                  <p className="Details">
                    Beans are rich in a number of important micronutrients,
                    including potassium, magnesium, folate, iron, and zinc, and
                    are important sources of protein in vegetarian diets.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/dals-and-pulses"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="foodItemContainer">
                <img
                  src="https://healthynibblesandbits.com/wp-content/uploads/2019/12/Milk-Bread-FF2.jpg"
                  alt="Milk-Bread"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Milk-Bread</h1>
                  <p className="Details">
                    In this section on Nutrition and Health you will find all of
                    the information you need about the nutritional value and
                    health benefits of bread and why bread is an essential part
                    of a healthy, balanced diet. Bread is a key staple in the
                    British diet and provides many of the nutrients required for
                    normal development and good health.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://www.bigbasket.com/pd/40037466/fresho-milk-bread-safe-preservative-free-400-g/"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="foodItemContainer">
                <img
                  src="https://images.cookforyourlife.org/wp-content/uploads/2018/08/Guide-Fruits-Vegetables-Pesticides.jpg"
                  alt="Non-StarchyVeggies"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Non-Starchy Veggies</h1>
                  <p className="Details">
                    Non-starchy vegetables are high in fiber and contain
                    essential vitamins and minerals. In fact, they have small
                    amounts of almost all the vitamins and minerals you need.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/organic-vegetables"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <h1>For Blood Pressure Person </h1>
              <div className="foodItemContainer">
                <img
                  src="https://www.tasteofhome.com/wp-content/uploads/2022/07/GettyImages-1343136272-e1658762967346.jpg"
                  alt="Garlic"
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Garlic </h1>
                  <p className="Details">
                    Garlic can add more than just zest to your dishes. It may
                    also have a hand in boosting your nitric oxide levels, which
                    dilates blood vessels. The more relaxed your blood vessels
                    are, the less your heart has to work to pump blood through
                    them. That helps keep your blood pressure down.
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/organic-vegetables"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
              <div className="foodItemContainer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdtjfxlVDcsrAWAcj0xnfwNlbziEFOco2XA&usqp=CAU"
                  alt="Pumpkin seeds "
                  className="foodImage"
                />
                <div className="fooddetailsContainer">
                  <h1>Pumpkin seeds </h1>
                  <p className="Details">
                    Pumpkin seed oil has also been shown to be a powerful
                    natural remedy for high blood pressure. A study in 23 women
                    found that supplementing with 3 grams of pumpkin seed oil
                    per day for 6 weeks led to significant reductions in SBP,
                    compared with a placebo group
                  </p>
                  <button type="button" className="buyNow">
                    <a
                      href="https://shop.jivabhumi.com/organic-vegetables"
                      target="blank"
                      className="link"
                    >
                      Buy Now
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FoodDiet;
