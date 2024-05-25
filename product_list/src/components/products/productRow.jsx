/**
 * ligne dans un tableau à deux colone (nom/prix)
 * @param {{name: string, stocked: bolean, price: string}} product 
 */
export function ProductRow({product}){

    const style = product.stocked ? undefined : {color: 'red'}
    return <tr>
            <td style={style}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    
}