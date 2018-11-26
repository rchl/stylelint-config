<style>
.foo {
    color: #aaaaa;
}
</style>

<style lang="scss" scoped>
@use 'sass:math';

.foo {
    ::v-deep .bar {
        color: #bbb;
        padding-right: math.div(4, 2)
    }
}
</style>">
