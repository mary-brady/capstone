<template>
    <div class="row">
        <div class="col-12">
            {{tips[Math.floor(Math.random() * tips.length)]}}
        </div>
    </div>
</template>

<script>
export default {
    name: "Tips",
    data() {
        tip: [
            "Aim for 2 hours and 30 minutes of moderate activity each week.",
            "To get all the health benefits of physical activity, do a combination of aerobic and muscle-strengthening activities.",
            "Muscle-strengthening activities include lifting weights, using resistance bands, and doing push-ups.",
            "To stay at a healthy weight, balance the calories you eat and drink with the calories you burn (use up).",
            "Start slowly. Gradually build up to at least 30 minutes of activity on most or all days of the week.",
            "Don't get discouraged if you stop for a while. Get started again gradually and work up to your old pace.",
            "Take five to 10 minutes to warm up and cool down properly.",
            "Listen to your body. Hold off on exercise when you're sick or feeling very fatigued.",
            "Set short-term goals—and reward yourself for achieving them. Try targeting a specific event, such as a road race or a walk-for-charity, to participate in—this can help keep you motivated.",
            "During a crunch don't relax your abs as you lower your chest away from your knees — you get only half the ab-toning benefit! Instead try to sustain the contraction on the way down.",
            "Squat-thrust push-ups get you in great shape because they work your upper body, core and lower body and improve agility, strength and endurance all at once.",
            "Go kayaking to get a taut stomach — it's ideal because much of your rowing power comes from your core.",
            "It's imperative that you sustain good form to ensure you target the correct muscles and decrease the amount of unnecessary stress placed on muscles and joints. Proper form dramatically decreases your chance of injury. As your weights increase, make sure the increase never comes at the expense of good form."
        ]
    }
}
</script>

<style>

</style>
