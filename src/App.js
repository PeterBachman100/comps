import Accordion from "./components/Accordion";


function App() {

    const items = [
        {
            id: '1',
            label: 'Question the First',
            content: 'This is the first answer. It might be a little silly. This is the first answer. It might be a little silly. This is the first answer. It might be a little silly.'
        },
        {
            id: '2',
            label: 'The next question',
            content: 'This is the second answer. It is serious. This is the second answer. It is serious. This is the second answer. It is serious.'
        },
        {
            id: '3',
            label: 'No more questions after this',
            content: 'And no more answer either. You are on your own. And no more answer either. You are on your own. And no more answer either. You are on your own.'
        },
    ];

    return <Accordion  items={items} />;
}

export default App;