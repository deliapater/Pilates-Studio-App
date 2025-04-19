import { shallowMount } from "@vue/test-utils";
import Schedule from '../src/components/Schedule.vue';
import ClassCard from '../src/components/ClassCard.vue';

describe('Schedule.vue', () => {
    it('renders a list of classes', () => {
        const classes = [
            { id: 1, className: 'Pilates Basics', instructor: 'Jane Doe', time: '10:00 AM' },
            { id: 2, className: 'Advanced Pilates', instructor: 'John Smith', time: '12:00 PM' }
        ];

        const wrapper = shallowMount(Schedule, {
            data() {
                return { classes };
            }
        });

        const classCards = wrapper.findAllComponents(ClassCard);
        expect(classCards).toHaveLength(classes.length);
    });

    it('passes the correct props to ClassCard', () => {
        const classes = [
            { id: 1, className: 'Pilates Basics', instructor: 'Jane Doe', time: '10:00 AM'},
        ];

    const wrapper = shallowMount(Schedule, {
        data () {
            return {  classes };
        },
    });

    const classCard = wrapper.findComponent(ClassCard);
    expect(classCard.props('className')).toBe(classes[0].className);
    expect(classCard.props('instructor')).toBe(classes[0].instructor);
    expect(classCard.props('time')).toBe(classes[0].time);
    });
});