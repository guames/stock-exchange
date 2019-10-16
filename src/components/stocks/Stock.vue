<template>
    <v-card style="margin: 10px"
            shaped
            elevation="8"
        >

        <v-card-title>{{ stock.cod }}</v-card-title>
        <v-card-subtitle style="margin-left: 20px">{{ stock.name }}</v-card-subtitle>

        <v-card-actions>
            <div>
                <v-card-text class="text--primary">
                    <div>Price:</div>
                    <div>{{ stock.buyPrice }}</div>
                    <v-btn
                            color="green"
                            text>Buy
                    </v-btn>
                </v-card-text>
            </div>
            <div>
                <v-card-text class="text--primary">
                    <div>Price:</div>
                    <div>{{ stock.sellPrice }}</div>
                    <v-btn color="red"
                            text>
                        Sell
                    </v-btn>
                </v-card-text>
            </div>
            <v-text-field
                    class="mt-0 pt-0"
                    hide-details
                    single-line
                    type="number"
                    value="100"
                    style="width: 60px"
            ></v-text-field>
        </v-card-actions>

    </v-card>
</template>

<script>
export default {
    props: ['stock']
}
</script>

<style scoped>

</style>