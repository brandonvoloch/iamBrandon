const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const CAL_TARGET = 2200;
const PROTEIN_TARGET = 165;
const STORE_KEY = "ppl-food-training-app-v1";

const recipes = [
  ["Breakfast Scramble", "Breakfast", "10-12 min", 730, 74, 8, 44, "4 eggs, 1/2 Jennie-O turkey sausage roll, spinach/peppers/mushrooms/onion, salsa.", "Cook sausage into crumbles, add vegetables, then scramble in eggs. Keep carbs out of breakfast.", "Jennie-O nutrition + custom breakfast"],
  ["Chicken Quesadilla", "Lunch/Dinner", "15-20 min", 365, 36, 60, 8, "Chicken breast, 2 high-fiber tortillas, cheese, peppers/onions, salsa, fat-free sour cream.", "Cook chicken and vegetables, fill tortillas, crisp in a pan or toaster oven, slice like pizza.", "Cookbook p.65"],
  ["Beef Quesadilla Lite", "Lunch/Dinner", "15-20 min", 255, 23, 37, 6, "Lean beef or steak, 1 high-fiber tortilla, cheese, peppers/onions, salsa, fat-free sour cream.", "Cook beef and vegetables, fold into one tortilla with cheese, crisp both sides, serve with salsa.", "Cookbook p.65"],
  ["Chicken/Turkey Lavash Wrap", "Lunch", "8-10 min", 410, 45, 35, 11, "Lavash or high-fiber wrap, chicken/turkey, vegetables, light dressing, cheese, mustard/salsa.", "Layer meat, vegetables, sauce, and cheese in wrap. Toast if you want it hot.", "Cookbook p.88"],
  ["Greg Diet Deli Wrap", "Lunch", "5-8 min", 320, 37, 31, 7, "Lavash/high-fiber wrap, extra-lean deli turkey, vegetables, mustard/salsa, optional cheese.", "Roll deli meat and vegetables into the wrap. Use mustard or salsa for low-calorie flavor.", "Cookbook p.88"],
  ["Hot Hamburg Open-Face", "Lunch/Dinner", "15-20 min", 385, 32, 39, 12, "Lean beef/turkey patty, bread, low-calorie gravy, ketchup/mustard, peas or broccoli.", "Cook patty, toast bread, heat gravy, stack open-face, pour gravy, add vegetables.", "Cookbook p.72"],
  ["Double Open-Face Chicken Burger", "Dinner", "15-20 min", 505, 49, 39, 13, "Thin chicken breast, bread, low-calorie gravy, ketchup, peas or broccoli.", "Cook thin chicken cutlets, toast bread, top each slice with chicken and gravy, add vegetables.", "Cookbook p.73"],
  ["Fish Coleslaw Tacos", "Lunch/Dinner", "15-20 min", 420, 32, 60, 9, "White fish, tortillas, coleslaw mix, salsa, lime, Greek yogurt or light sauce.", "Pan-cook fish, warm tortillas, toss slaw with lime and sauce, assemble tacos.", "Cookbook p.91"],
  ["Quick Meat Lovers Flatbread Pizza", "Dinner", "15-20 min", 468, 40, 55, 8, "Thin flatbread/crust, pizza sauce, lean turkey/beef/chicken, cheese, peppers/onions/mushrooms.", "Toast crust, add sauce, cooked lean meat, vegetables, and cheese. Bake until melted.", "Cookbook p.100/p.102 shortcut"],
  ["Flatout Beef Pizza", "Lunch/Dinner", "15-20 min", 310, 27, 38, 6, "Flatout/thin pizza crust, cooked lean beef, pizza sauce, cheese, onions/peppers/mushrooms.", "Cook beef and vegetables, toast crust, top with sauce, beef, vegetables, and cheese.", "Cookbook p.102"],
  ["Sloppy Greg Open-Face", "Lunch/Dinner", "15-20 min", 450, 31, 57, 9, "Lean ground turkey/beef, tomato sauce, sloppy joe seasoning, bread, vegetables mixed in.", "Brown meat, add sauce/seasoning and diced vegetables, simmer, spoon over toast.", "Cookbook p.79"],
  ["Steak and Air-Fryer Frites", "Dinner", "18-20 min", 600, 45, 65, 15, "Thin lean steak, frozen fries or sliced potatoes, green vegetables, seasoning, ketchup/light sauce.", "Air-fry fries first. Sear thin steak 3-5 min per side. Microwave or saute greens.", "Custom"],
  ["Tuna Rice Cake Stack", "Lunch", "5-8 min", 330, 35, 35, 5, "Tuna, rice cakes, light mayo or Greek yogurt, mustard, tomato, lettuce, pickles.", "Mix tuna with sauce and seasonings, spoon onto rice cakes, add crunchy vegetables.", "Cookbook p.97"],
  ["Burger Wrap and Fries", "Dinner", "15-20 min", 520, 45, 45, 14, "Lean turkey/beef, high-fiber wrap, cheese, lettuce/tomato/pickles, air-fryer fries.", "Cook burger meat, load into wrap with toppings and sauce. Air-fry fries while meat cooks.", "Custom"],
  ["Banana Rice Cakes + Whey", "Pre-workout", "3 min", 310, 32, 60, 2, "1 banana, 2 rice cakes, protein powder, water, optional sugar-free syrup.", "Eat 60-90 minutes before lifting. Keep it easy to digest.", "Custom"],
  ["Chocolate PB Banana Rice Cakes", "Pre-workout", "5 min", 360, 30, 76, 3, "Rice cakes, banana, protein powder, powdered peanut butter or chocolate pudding mix.", "Mix protein topping with a little water, spread on rice cakes, add banana slices.", "Cookbook p.132 inspired"],
  ["Chocolate Protein Mug Cake", "Dessert", "5 min", 180, 30, 7, 3, "Protein powder, cocoa/pudding mix, baking powder, liquid, sweetener.", "Mix into a mug batter, microwave in short bursts until set, top with sugar-free syrup.", "Cookbook p.175"],
  ["Chocolate PB Protein Ice Cream", "Dessert", "8-10 min", 190, 28, 10, 5, "Protein powder, ice, almond milk, cocoa/pudding mix, powdered peanut butter.", "Blend until thick. Add liquid slowly so it stays like ice cream, not a shake.", "Cookbook p.181"],
  ["Strawberry Protein Ice Cream", "Dessert", "8-10 min", 230, 27, 18, 5, "Frozen strawberries, protein powder, almond milk, ice, sweetener.", "Blend frozen fruit, protein, ice, and small splashes of liquid until thick.", "Cookbook p.187"],
  ["Greek Yogurt Berry Dessert", "Dessert", "3 min", 220, 25, 28, 0, "Nonfat Greek yogurt, frozen berries, sugar-free syrup, optional protein powder.", "Stir yogurt with syrup and berries. Add protein powder if protein is short that day.", "Custom"],
].map(([name, type, time, calories, protein, carbs, fat, ingredients, method, source]) => ({
  name, type, time, calories, protein, carbs, fat, ingredients, method, source,
}));

const mealPlan = [
  ["Monday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Monday", "1:00 PM", "Lunch", "Chicken/Turkey Lavash Wrap"],
  ["Monday", "3:45 PM", "Pre-workout", "Banana Rice Cakes + Whey"],
  ["Monday", "6:30 PM", "Dinner", "Quick Meat Lovers Flatbread Pizza"],
  ["Monday", "8:30 PM", "Dessert", "Chocolate Protein Mug Cake"],
  ["Tuesday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Tuesday", "1:00 PM", "Lunch", "Chicken Quesadilla"],
  ["Tuesday", "3:45 PM", "Pre-workout", "Banana Rice Cakes + Whey"],
  ["Tuesday", "6:30 PM", "Dinner", "Double Open-Face Chicken Burger"],
  ["Tuesday", "8:30 PM", "Dessert", "Strawberry Protein Ice Cream"],
  ["Wednesday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Wednesday", "1:00 PM", "Lunch", "Fish Coleslaw Tacos"],
  ["Wednesday", "3:45 PM", "Pre-workout", "Chocolate PB Banana Rice Cakes"],
  ["Wednesday", "6:30 PM", "Dinner", "Sloppy Greg Open-Face"],
  ["Wednesday", "8:30 PM", "Dessert", "Chocolate Protein Mug Cake"],
  ["Thursday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Thursday", "1:00 PM", "Lunch", "Hot Hamburg Open-Face"],
  ["Thursday", "3:45 PM", "Pre-workout", "Banana Rice Cakes + Whey"],
  ["Thursday", "6:30 PM", "Dinner", "Steak and Air-Fryer Frites"],
  ["Thursday", "8:30 PM", "Dessert", "Chocolate PB Protein Ice Cream"],
  ["Friday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Friday", "1:00 PM", "Lunch", "Greg Diet Deli Wrap"],
  ["Friday", "3:45 PM", "Pre-workout", "Chocolate PB Banana Rice Cakes"],
  ["Friday", "6:30 PM", "Dinner", "Quick Meat Lovers Flatbread Pizza"],
  ["Friday", "8:30 PM", "Dessert", "Greek Yogurt Berry Dessert"],
  ["Saturday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Saturday", "1:00 PM", "Lunch", "Beef Quesadilla Lite"],
  ["Saturday", "3:45 PM", "Pre-workout", "Chocolate PB Banana Rice Cakes"],
  ["Saturday", "6:30 PM", "Dinner", "Burger Wrap and Fries"],
  ["Saturday", "8:30 PM", "Dessert", "Strawberry Protein Ice Cream"],
  ["Sunday", "9:30 AM", "Breakfast", "Breakfast Scramble"],
  ["Sunday", "1:00 PM", "Lunch", "Chicken/Turkey Lavash Wrap"],
  ["Sunday", "3:45 PM", "Snack", "Greek Yogurt Berry Dessert"],
  ["Sunday", "6:30 PM", "Dinner", "Burger Wrap and Fries"],
  ["Sunday", "8:30 PM", "Dessert", "Greek Yogurt Berry Dessert"],
].map(([day, time, meal, recipe]) => ({ day, time, meal, recipe }));

const workoutPlan = [
  ["Monday", "Push A", "Incline DB Press", 3, 5, 8, "75 lb DBs", "Move to 80s after 3x8", "Low incline, deep stretch, controlled eccentric."],
  ["Monday", "Push A", "Seated DB OHP", 2, 5, 8, "60-65 lb DBs", "Add reps first because incline press comes before it.", "Elbows slightly forward; keep shoulders down."],
  ["Monday", "Push A", "Machine Chest Press or Dip Machine", 2, 8, 12, "", "Add reps, then load.", "Stable press after main lift."],
  ["Monday", "Push A", "Kettlebell Lateral Raise", 3, 15, 25, "", "Hit 25s, then heavier KB or slower tempo.", "Lean forward slightly; no swinging."],
  ["Monday", "Push A", "Rope Pressdown", 2, 10, 15, "", "Add reps, then load.", "Elbows stable, full contraction."],
  ["Tuesday", "Pull A", "Lat Pulldown", 3, 6, 10, "", "Add reps, then load.", "Full stretch at top, controlled negative."],
  ["Tuesday", "Pull A", "Lat Pullover", 3, 10, 15, "", "Favorite lift. Keep twice weekly.", "Let lats stretch, pull with elbows/upper arms."],
  ["Tuesday", "Pull A", "Chest-Supported Row", 3, 8, 12, "", "Add reps, then load.", "Deep stretch, squeeze mid-back."],
  ["Tuesday", "Pull A", "Cable Rear Delt Fly", 2, 15, 25, "", "Add reps before load.", "Sweep back, do not yank."],
  ["Tuesday", "Pull A", "Cable Curl", 2, 8, 12, "", "Add reps, then load.", "Elbows slightly behind body if comfortable."],
  ["Wednesday", "Legs A", "Smith Machine Squat", 3, 6, 10, "165 lb", "Add 10 lb after 3x10.", "Deep controlled squat; stable foot position."],
  ["Wednesday", "Legs A", "Romanian Deadlift", 3, 6, 10, "", "Add reps, then load.", "Neutral spine, hamstring stretch."],
  ["Wednesday", "Legs A", "Leg Press or Split Squat", 2, 10, 15, "", "Add reps before load.", "Controlled depth."],
  ["Wednesday", "Legs A", "Seated Leg Curl", 2, 10, 15, "", "Add reps, then load.", "Hamstrings trained in stretched position."],
  ["Wednesday", "Legs A", "Calf Raise", 2, 10, 15, "", "Pause top and bottom.", "Full range of motion."],
  ["Thursday", "Push B", "Seated DB OHP", 3, 4, 7, "65 lb DBs", "Move up after 3x7.", "Main lift of the day."],
  ["Thursday", "Push B", "Incline DB Press", 2, 8, 10, "lighter than Push A", "Back-off volume.", "Low incline, elbows slightly tucked."],
  ["Thursday", "Push B", "Cable Fly or Pec Deck", 2, 12, 20, "", "Add reps before load.", "Deep stretch, chest proud."],
  ["Thursday", "Push B", "Kettlebell Lateral Raise", 3, 15, 25, "", "Add reps before load.", "No swinging."],
  ["Thursday", "Push B", "Overhead Triceps Extension", 2, 10, 15, "", "Add reps, then load.", "Stretch triceps; controlled reps."],
  ["Friday", "Pull B", "Seated Cable Row or Machine Row", 3, 6, 10, "", "Add reps, then load.", "Line up pull with target back fibers."],
  ["Friday", "Pull B", "Lat Pullover", 3, 10, 15, "", "Second weekly exposure.", "Control stretch and contraction."],
  ["Friday", "Pull B", "Neutral-Grip Pulldown", 2, 8, 12, "", "Add reps, then load.", "Full stretch."],
  ["Friday", "Pull B", "Face Pull", 2, 12, 20, "", "Add reps before load.", "Shoulder health and rear delts."],
  ["Friday", "Pull B", "Incline DB Curl", 2, 8, 12, "", "Add reps, then load.", "Loaded stretch for biceps."],
  ["Saturday", "Legs B", "Smith Machine Squat - Tempo", 3, 8, 12, "145-155 lb", "Use less than Legs A; add reps first.", "Pause/tempo to keep form strict."],
  ["Saturday", "Legs B", "Hip Thrust or RDL", 3, 8, 12, "", "Add reps, then load.", "Glute/hamstring focus."],
  ["Saturday", "Legs B", "Leg Extension", 2, 12, 20, "", "Add reps before load.", "Quad isolation with control."],
  ["Saturday", "Legs B", "Leg Curl", 2, 10, 15, "", "Add reps, then load.", "Controlled eccentric."],
  ["Saturday", "Legs B", "Cable Crunch or Hanging Knee Raise", 2, 10, 15, "", "Add reps before load.", "Core without dragging workout over 45 min."],
].map(([day, session, exercise, sets, minReps, topReps, startLoad, rule, cue]) => ({
  day, session, exercise, sets, minReps, topReps, startLoad, rule, cue,
}));

const groceries = [
  ["Jennie-O turkey sausage rolls", "4 x 16 oz", "Protein", 20],
  ["Eggs", "30 count", "Protein", 7],
  ["Chicken breast", "3 lb", "Protein", 10],
  ["93/7 ground turkey or extra-lean beef", "2 lb", "Protein", 10],
  ["Lean steak/top round/sirloin", "0.75-1 lb", "Protein", 8],
  ["Frozen tilapia or white fish", "1 lb", "Protein", 5],
  ["Extra-lean deli turkey", "8 oz", "Protein", 4],
  ["Liquid egg whites", "32 oz", "Protein", 5],
  ["Nonfat Greek yogurt", "32 oz", "Protein/Dessert", 4],
  ["Low-fat cottage cheese", "24 oz", "Protein/Dessert", 3],
  ["Low-carb high-fiber tortillas", "2 packs", "Carbs", 7],
  ["Flatbread or thin pizza crusts", "1 pack", "Carbs", 4],
  ["Sandwich bread", "1 loaf", "Carbs", 3],
  ["Rice cakes", "2 packs", "Carbs", 4],
  ["Potatoes or frozen fries", "5 lb or 1 bag", "Carbs", 4],
  ["White rice", "2 lb", "Carbs", 2],
  ["Bananas", "7", "Fruit", 2],
  ["Apples or oranges", "7 total", "Fruit", 6],
  ["Frozen berries", "2 lb", "Fruit", 5],
  ["Spinach", "large tub/bag", "Vegetables", 4],
  ["Frozen broccoli/mixed vegetables", "4 bags", "Vegetables", 6],
  ["Bell peppers, onions, mushrooms", "1 week supply", "Vegetables", 6],
  ["Coleslaw mix or cabbage", "1 bag", "Vegetables", 2],
  ["Zucchini", "2 medium", "Vegetables", 2],
  ["Pasta sauce and pizza sauce", "2 jars/cans", "Sauces", 4],
  ["Salsa", "1 jar", "Sauces", 2],
  ["Fat-free or reduced-fat cheese", "1 pack", "Dairy", 3],
  ["Sugar-free pudding mix", "1-2 boxes", "Dessert", 2],
  ["Unsweetened almond milk", "1 half-gallon", "Dessert", 3],
].map(([item, quantity, category, cost]) => ({ item, quantity, category, cost }));

const sources = [
  ["Cookbook", "The Ultimate Anabolic Cookbook 2 local PDF"],
  ["Jennie-O turkey sausage nutrition", "https://www.jennieo.com/products/all-natural-turkey-sausage/"],
  ["USDA MyPlate 2200 plan", "https://myplate-prod.azureedge.us/sites/default/files/2023-04/2200-calories-ages-14-plus-years.pdf"],
  ["USDA food cost reports", "https://www.fns.usda.gov/research/cnpp/usda-food-plans/cost-food-monthly-reports"],
  ["Jeff Nippard / Jesse James West PPL video", "https://www.youtube.com/watch?v=vD-dEl7R2Bg"],
  ["Chris Bumstead / Jesse James West exercise video", "https://www.youtube.com/watch?v=mtX-B5gbgmM"],
  ["Dr. Mike Israetel / Jesse James West exercise video", "https://www.youtube.com/watch?v=CUY0YJPeZpw"],
  ["Jeff Nippard 25 best exercises video", "https://www.youtube.com/watch?v=S6rqpxVGKZ4"],
  ["Jeff Nippard muscle-building video", "https://www.youtube.com/watch?v=lu_BObG6dj8"],
];

const recipeByName = Object.fromEntries(recipes.map((recipe) => [recipe.name, recipe]));
const sessionNames = [...new Set(workoutPlan.map((item) => item.session))];
let state = loadState();

const el = (id) => document.getElementById(id);
const money = (n) => `$${Math.round(n)}`;
const num = (value) => Number.parseFloat(value) || 0;
const safeId = (value) => value.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

function defaultState() {
  return {
    day: "Monday",
    week: "1",
    session: "Push A",
    days: {},
    meals: {},
    workouts: {},
    groceries: {},
  };
}

function loadState() {
  try {
    return { ...defaultState(), ...JSON.parse(localStorage.getItem(STORE_KEY) || "{}") };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function mealKey(day, recipe, index) {
  return `${day}:${index}:${recipe}`;
}

function workoutKey(week, exercise) {
  return `${week}:${exercise}`;
}

function plannedMealsForDay(day) {
  return mealPlan.filter((meal) => meal.day === day);
}

function countedMeal(day, meal, index) {
  const recipe = recipeByName[meal.recipe];
  const entry = state.meals[mealKey(day, meal.recipe, index)] || {};
  return {
    calories: entry.calories ? num(entry.calories) : recipe.calories,
    protein: entry.protein ? num(entry.protein) : recipe.protein,
  };
}

function dayTotals(day) {
  return plannedMealsForDay(day).reduce(
    (total, meal, index) => {
      const counted = countedMeal(day, meal, index);
      total.calories += counted.calories;
      total.protein += counted.protein;
      total.plannedCalories += recipeByName[meal.recipe].calories;
      total.plannedProtein += recipeByName[meal.recipe].protein;
      return total;
    },
    { calories: 0, protein: 0, plannedCalories: 0, plannedProtein: 0 },
  );
}

function allWorkoutEntries() {
  return Object.values(state.workouts);
}

function workoutStats(entry, exercise) {
  const sets = entry?.sets || [];
  const reps = sets.map((set) => num(set.reps)).filter(Boolean);
  const weights = sets.map((set) => num(set.weight)).filter(Boolean);
  const volume = sets.reduce((sum, set) => sum + num(set.weight) * num(set.reps), 0);
  const bestE1rm = sets.reduce((best, set) => {
    const weight = num(set.weight);
    const setReps = num(set.reps);
    return Math.max(best, weight && setReps ? weight * (1 + setReps / 30) : 0);
  }, 0);
  const loggedTargetSets = sets.slice(0, exercise.sets).filter((set) => num(set.reps) >= exercise.topReps).length;
  const shouldAdd = loggedTargetSets >= exercise.sets;
  return { reps, weights, volume, bestE1rm, shouldAdd };
}

function initControls() {
  const daySelect = el("daySelect");
  daySelect.innerHTML = DAYS.map((day) => `<option>${day}</option>`).join("");
  daySelect.value = state.day;
  daySelect.addEventListener("change", () => {
    state.day = daySelect.value;
    const dayWorkout = workoutPlan.find((item) => item.day === state.day);
    if (dayWorkout) state.session = dayWorkout.session;
    saveState();
    renderAll();
  });

  const weekSelect = el("weekSelect");
  weekSelect.innerHTML = Array.from({ length: 8 }, (_, i) => `<option value="${i + 1}">Week ${i + 1}</option>`).join("");
  weekSelect.value = state.week;
  weekSelect.addEventListener("change", () => {
    state.week = weekSelect.value;
    saveState();
    renderWorkout();
    renderDashboard();
  });

  const sessionSelect = el("sessionSelect");
  sessionSelect.innerHTML = sessionNames.map((session) => `<option>${session}</option>`).join("");
  sessionSelect.value = state.session;
  sessionSelect.addEventListener("change", () => {
    state.session = sessionSelect.value;
    saveState();
    renderWorkout();
  });

  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("is-active", tab === button));
      document.querySelectorAll(".view").forEach((view) => view.classList.toggle("is-active", view.id === `view-${button.dataset.view}`));
    });
  });

  el("recipeSearch").addEventListener("input", renderRecipes);
  el("exportData").addEventListener("click", exportData);
  el("importData").addEventListener("change", importData);
  el("resetData").addEventListener("click", resetData);

  el("currentDateLabel").textContent = "Monday, June 1, 2026";
}

function renderDashboard() {
  const totals = DAYS.map(dayTotals);
  const avgCal = Math.round(totals.reduce((sum, item) => sum + item.calories, 0) / DAYS.length);
  const avgProtein = Math.round(totals.reduce((sum, item) => sum + item.protein, 0) / DAYS.length);
  const groceryTotal = groceries.reduce((sum, item) => sum + item.cost, 0);
  const completedExercises = allWorkoutEntries().filter((entry) => (entry.sets || []).some((set) => set.weight && set.reps)).length;
  const current = dayTotals(state.day);
  const dayData = state.days[state.day] || {};

  el("metricsGrid").innerHTML = [
    metric("Avg calories", avgCal, `${avgCal - CAL_TARGET} vs target`),
    metric("Avg protein", `${avgProtein}g`, avgProtein >= PROTEIN_TARGET ? "good" : "needs work"),
    metric("Grocery total", money(groceryTotal), "$150 target"),
    metric("Logged lifts", completedExercises, `week ${state.week}`),
  ].join("");

  el("calorieChart").innerHTML = DAYS.map((day) => {
    const total = dayTotals(day);
    const plannedWidth = Math.min(100, Math.round((total.plannedCalories / 2500) * 100));
    const actualWidth = Math.min(100, Math.round((total.calories / 2500) * 100));
    return `
      <div class="bar-row">
        <strong>${day.slice(0, 3)}</strong>
        <div class="bar-track">
          <span class="bar-fill" style="width:${plannedWidth}%"></span>
          <span class="bar-fill actual" style="width:${actualWidth}%"></span>
        </div>
        <span>${Math.round(total.calories)}</span>
      </div>`;
  }).join("");

  const session = workoutPlan.find((item) => item.day === state.day)?.session || "Rest";
  el("todayWorkoutLabel").textContent = session;
  el("todaySummary").innerHTML = `
    <ul class="today-list">
      <li><strong>${state.day}</strong> - ${Math.round(current.calories)} calories - ${Math.round(current.protein)}g protein</li>
      <li>Workout: ${session} at 5:00 PM for about 45 minutes</li>
      <li>Weight: ${dayData.weight || "not logged"} - Steps: ${dayData.steps || "not logged"}</li>
      <li>Produce: ${dayData.produce || "not logged"}</li>
    </ul>`;
}

function metric(label, value, sub) {
  return `<div class="metric"><span>${label}</span><strong>${value}</strong><small>${sub}</small></div>`;
}

function renderMeals() {
  const day = state.day;
  const dayData = state.days[day] || {};
  el("weightInput").value = dayData.weight || "";
  el("stepsInput").value = dayData.steps || "";
  el("produceSelect").value = dayData.produce || "";

  el("weightInput").oninput = updateDayData;
  el("stepsInput").oninput = updateDayData;
  el("produceSelect").onchange = updateDayData;

  el("mealList").innerHTML = plannedMealsForDay(day).map((meal, index) => {
    const recipe = recipeByName[meal.recipe];
    const key = mealKey(day, meal.recipe, index);
    const entry = state.meals[key] || {};
    return `
      <article class="meal-card">
        <div class="meal-time">${meal.time}<br>${meal.meal}</div>
        <div>
          <h4 class="meal-title">${recipe.name}</h4>
          <div class="meal-meta">
            <span class="chip">${recipe.calories} cal</span>
            <span class="chip green">${recipe.protein}g protein</span>
            <span class="chip orange">${recipe.time}</span>
          </div>
        </div>
        <p class="short-recipe"><strong>Make it:</strong> ${recipe.method}<br><strong>Ingredients:</strong> ${recipe.ingredients}</p>
        <div class="actual-inputs">
          <label>Actual calories <input data-meal="${key}" data-field="calories" inputmode="decimal" value="${entry.calories || ""}" placeholder="${recipe.calories}"></label>
          <label>Actual protein <input data-meal="${key}" data-field="protein" inputmode="decimal" value="${entry.protein || ""}" placeholder="${recipe.protein}"></label>
        </div>
      </article>`;
  }).join("");

  document.querySelectorAll("[data-meal]").forEach((input) => {
    input.addEventListener("input", () => {
      const key = input.dataset.meal;
      state.meals[key] = { ...(state.meals[key] || {}), [input.dataset.field]: input.value };
      saveState();
      renderDashboard();
    });
  });
}

function updateDayData() {
  state.days[state.day] = {
    ...(state.days[state.day] || {}),
    weight: el("weightInput").value,
    steps: el("stepsInput").value,
    produce: el("produceSelect").value,
  };
  saveState();
  renderDashboard();
}

function renderWorkout() {
  el("weekSelect").value = state.week;
  el("sessionSelect").value = state.session;
  const exercises = workoutPlan.filter((item) => item.session === state.session);
  el("workoutList").innerHTML = exercises.map((exercise) => {
    const key = workoutKey(state.week, exercise.exercise);
    const entry = state.workouts[key] || { sets: [] };
    const stats = workoutStats(entry, exercise);
    const setInputs = Array.from({ length: exercise.sets }, (_, i) => {
      const set = entry.sets?.[i] || {};
      return `
        <span class="set-number">Set ${i + 1}</span>
        <label>Weight <input data-workout="${key}" data-set="${i}" data-field="weight" inputmode="decimal" value="${set.weight || ""}" aria-label="${exercise.exercise} set ${i + 1} weight"></label>
        <label>Reps <input data-workout="${key}" data-set="${i}" data-field="reps" inputmode="decimal" value="${set.reps || ""}" aria-label="${exercise.exercise} set ${i + 1} reps"></label>`;
    }).join("");
    const next = stats.shouldAdd ? "Add load" : "Add reps";
    return `
      <article class="workout-card">
        <div>
          <h4>${exercise.exercise}</h4>
          <div class="workout-meta">
            <span class="chip">${exercise.sets} sets</span>
            <span class="chip">${exercise.minReps}-${exercise.topReps} reps</span>
            ${exercise.startLoad ? `<span class="chip green">${exercise.startLoad}</span>` : ""}
          </div>
          <p class="short-recipe"><strong>Rule:</strong> ${exercise.rule}<br><strong>Cue:</strong> ${exercise.cue}</p>
        </div>
        <div>
          <div class="set-grid">${setInputs}</div>
          <label class="workout-note">Notes
            <textarea class="note-input" data-workout="${key}" data-field="note" placeholder="Form, pain, pump, rest time...">${entry.note || ""}</textarea>
          </label>
        </div>
        <div class="next-tag ${stats.shouldAdd ? "add" : ""}">
          ${next}<br>
          <small>${Math.round(stats.volume)} volume<br>${Math.round(stats.bestE1rm)} e1RM</small>
        </div>
      </article>`;
  }).join("");

  document.querySelectorAll("[data-workout]").forEach((input) => {
    input.addEventListener("input", updateWorkoutEntry);
    input.addEventListener("change", () => {
      renderWorkout();
      renderDashboard();
    });
  });
}

function updateWorkoutEntry(event) {
  const key = event.target.dataset.workout;
  const field = event.target.dataset.field;
  const entry = state.workouts[key] || { sets: [] };
  if (field === "note") {
    entry.note = event.target.value;
  } else {
    const setIndex = Number(event.target.dataset.set);
    entry.sets[setIndex] = { ...(entry.sets[setIndex] || {}), [field]: event.target.value };
  }
  state.workouts[key] = entry;
  saveState();
  renderDashboard();
}

function renderRecipes() {
  const query = el("recipeSearch").value.trim().toLowerCase();
  const visible = recipes.filter((recipe) => {
    const haystack = `${recipe.name} ${recipe.type} ${recipe.ingredients} ${recipe.method}`.toLowerCase();
    return haystack.includes(query);
  });
  el("recipeGrid").innerHTML = visible.length ? visible.map((recipe) => `
    <article class="recipe-card">
      <div>
        <h4>${recipe.name}</h4>
        <div class="recipe-meta">
          <span class="chip">${recipe.time}</span>
          <span class="chip">${recipe.calories} cal</span>
          <span class="chip green">${recipe.protein}g protein</span>
        </div>
      </div>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Method:</strong> ${recipe.method}</p>
      <p><strong>Source:</strong> ${recipe.source}</p>
    </article>`).join("") : `<div class="empty">No recipes match that search.</div>`;
}

function renderGrocery() {
  const total = groceries.reduce((sum, item) => sum + item.cost, 0);
  const checked = groceries.filter((item) => state.groceries[safeId(item.item)]).reduce((sum, item) => sum + item.cost, 0);
  el("grocerySummary").innerHTML = [
    metric("Estimated total", money(total), "$150 target"),
    metric("Checked off", money(checked), `${groceries.filter((item) => state.groceries[safeId(item.item)]).length} items`),
  ].join("");

  const groups = groceries.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  el("groceryList").innerHTML = Object.entries(groups).map(([category, items]) => `
    <section class="grocery-group">
      <h4>${category}</h4>
      ${items.map((item) => {
        const id = safeId(item.item);
        return `
          <label class="grocery-item">
            <input type="checkbox" data-grocery="${id}" ${state.groceries[id] ? "checked" : ""}>
            <span><strong>${item.item}</strong><br>${item.quantity}</span>
            <span>${money(item.cost)}</span>
          </label>`;
      }).join("")}
    </section>`).join("");

  document.querySelectorAll("[data-grocery]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      state.groceries[checkbox.dataset.grocery] = checkbox.checked;
      saveState();
      renderGrocery();
    });
  });
}

function renderNotes() {
  el("sourceList").innerHTML = sources.map(([label, url]) => {
    const isUrl = url.startsWith("http");
    return `
      <div class="source-row">
        <strong>${label}</strong>
        ${isUrl ? `<a href="${url}" target="_blank" rel="noreferrer">${url}</a>` : `<span>${url}</span>`}
      </div>`;
  }).join("");
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ppl-tracker-data.json";
  link.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      state = { ...defaultState(), ...JSON.parse(reader.result) };
      saveState();
      renderAll();
    } catch {
      alert("That file was not valid tracker data.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetData() {
  if (!confirm("Clear all saved meal, workout, and grocery entries?")) return;
  state = defaultState();
  saveState();
  renderAll();
}

function renderAll() {
  el("daySelect").value = state.day;
  const dayWorkout = workoutPlan.find((item) => item.day === state.day);
  if (dayWorkout && !sessionNames.includes(state.session)) state.session = dayWorkout.session;
  renderDashboard();
  renderMeals();
  renderWorkout();
  renderRecipes();
  renderGrocery();
  renderNotes();
}

initControls();
renderAll();
