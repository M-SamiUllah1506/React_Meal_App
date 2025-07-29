import React from 'react';
import classes from './MealSummary.module.css';
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food Deliver To You</h2>
      <p>
        Welcome to Flavor Haven! Craving something delicious? You’re in the right place. Our carefully crafted menu brings you a mix of mouth-watering flavors, fresh ingredients, and satisfying meals—perfect for any time of day. Whether you're in the mood for a quick bite or a hearty feast, we've got something to please every palate.
      </p>

      <p>
        From classic comfort foods to bold new creations, every dish is made with care and passion. Browse through our selections, discover your favorites, and enjoy an experience that’s as tasty as it is convenient. Let your cravings lead the way!
      </p>

    </section>
  );
};

export default MealSummary;
