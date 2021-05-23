export const MembersComponent = {
    template:
    `<div>
        {{counter}}
    </div>`,
    computed: {
        counter(){
            return this.$store.state.counter
        }
    }
}