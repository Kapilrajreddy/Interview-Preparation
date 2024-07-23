import {FixedSizeList as List} from 'react-window'

const VirtualizedList=()=>{

    const Row = ({index,style})=><div style={style}>Row {index}</div>

    return(
        <List height={400} itemCount={10} itemSize={35} width={300} style={{border:"1px solid black"}}>
            {Row}
        </List>

    )
}
export default VirtualizedList