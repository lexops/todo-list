import './Filter.scss'
import { useTodos } from '../TodosContext'

function Filter() {

    const store = useTodos()

    return (
        <>
            <div className="filters">
                <div>
                    <p>Filter by state</p>
                    <div className="badges">
                        <div
                            className={`badge ${store.filterBy === 'todo' ? 'selected' : ''}`}
                            onClick={() => store.setFilterBy('todo')}
                        >
                            To-Do
                        </div>
                        <div
                            className={`badge ${store.filterBy === 'done' ? 'selected' : ''}`}
                            onClick={() => store.setFilterBy('done')}
                        >
                            Done
                        </div>
                        {
                            store.filterBy &&
                            <span
                                onClick={() => store.setFilterBy('')}
                                className="clear">
                                x clear
                            </span>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Filter