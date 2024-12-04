const app = new Vue({
    el: '#app',
    data: {
        selectedPizzaIndex: null,
        selectedToppings: [],
        pizzas: [
            {
                id: 1,
                name: 'Cheese Pizza',
                price: 8,
                discount: {
                    is_active: false,
                    final_price: 8
                },
                toppings: [1, 2, 3, 4, 8, 11],
                image: 'assets/img/Cheese Pizza.png'
            },
            {
                id: 2,
                name: 'Veggie Pizza',
                price: 10,
                discount: {
                    is_active: true,
                    final_price: 8.5
                },
                toppings: [2, 3, 4, 5, 6, 7, 9, 11],
                image: 'assets/img/Veggie Pizza.png',
                offerRibbon: 'assets/logo/ribbon.svg'
            },
            {
                id: 3,
                name: 'Classical Pizza',
                price: 12,
                discount: {
                    is_active: false,
                    final_price: 12
                },
                toppings: [2, 3, 4, 8, 9, 10, 11, 12],
                image: 'assets/img/Classical Pizza.png'
            }
        ],
        toppings: [
            { id: 1, name: "Avocado", price: 1 },
            { id: 2, name: "Broccoli", price: 1 },
            { id: 3, name: "Onions", price: 1 },
            { id: 4, name: "Zucchini", price: 1 },
            { id: 5, name: "Lobster", price: 2 },
            { id: 6, name: "Oyster", price: 2 },
            { id: 7, name: "Salmon", price: 2 },
            { id: 8, name: "Tuna", price: 2 },
            { id: 9, name: "Bacon", price: 3 },
            { id: 10, name: "Duck", price: 3 },
            { id: 11, name: "Ham", price: 3 },
            { id: 12, name: "Sausage", price: 3 }
        ],
        sizes: [
            {
                id: 1,
                name: "Small",
                extra_price: 0
            },
            {
                id: 2,
                name: "Medium",
                extra_price: 5
            },
            {
                id: 3,
                name: "Large",
                extra_price: 7
            }
        ],
    },
    methods: {
        selectPizza(index) {
            this.selectedPizzaIndex = index;
            // Reset selected toppings when a new pizza is selected
            this.selectedToppings = [];
        },
        isToppingAllowed(toppingId) {
            // If no pizza is selected, return false
            if (this.selectedPizzaIndex === null) return false;

            // Check if the topping is in the current pizza's allowed toppings
            return this.pizzas[this.selectedPizzaIndex].toppings.includes(toppingId);
        },
        toggleTopping(toppingId) {
            // Only allow toggling if the topping is allowed for the selected pizza
            if (this.isToppingAllowed(toppingId)) {
                const index = this.selectedToppings.indexOf(toppingId);
                if (index > -1) {
                    // Remove topping if already selected
                    this.selectedToppings.splice(index, 1);
                } else {
                    // Add topping if not selected
                    this.selectedToppings.push(toppingId);
                }
            }
        }
    }
});