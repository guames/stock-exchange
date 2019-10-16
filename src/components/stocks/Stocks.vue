<template>
    <div>
        <label></label>
        <v-text-field
                label="Search Stock:"
                placeholder="Cod"
                filled
                rounded
                dense
                :append-icon="'mdi-share-outline'"
        ></v-text-field>
        <v-container>
            <v-row>
                    <stock
                            v-bind:key="stock.cod"
                            v-for="stock in stocks"
                            :stock="stock"></stock>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Stock from "./Stock";
    export default {
        name: "Stocks",
        components: {Stock},
        data: () => {
            return {
                stocks: [
                    {
                        cod: "AAPL34",
                        name: "Apple",
                        buyPrice: "97.61",
                        sellPrice: "97.60"
                    },
                    {
                        cod: "GOAU4",
                        name: "Metalúrgica Gerdau",
                        buyPrice: "6.37",
                        sellPrice: "6.36"
                    },
                    {
                        cod: "USIM5",
                        name: "Usiminas",
                        buyPrice: "7.79",
                        sellPrice: "7.78"
                    },
                    {
                        cod: "ITSA4",
                        name: "Itaúsa",
                        buyPrice: "12.93",
                        sellPrice: "12.92"
                    },
                    {
                        cod: "PETR4",
                        name: "Petrobras",
                        buyPrice: "27.60",
                        sellPrice: "27.59"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>