import { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EmpInfo = () => {
    const[oidata, oidatachange] = useState(null);
    const navigate = useNavigate();

    const Removefunction = (order) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/order" + order, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/order").then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    },[])
    return (
        <div className="container">
        <div className="card"/>
        <div className="card-title"/>
        <h2>Order Information</h2>
            <div>
            <div className="card-body">
            <div className="divbtn">
                <Link to="order/create" className="btn btn-success">+ Create Order</Link>
                <select options={oidata}onChange={opt => console.log(opt.label, opt.value)}/>
                
            </div>
        <table className="table table-bordered">
        <thead className="bg-dark text-white">
<tr>
    <td>Order ID</td>
    <td>Creation Date</td>
    <td>Created By</td>
    <td>Order Type</td>
    <td>Customer</td>
</tr>
</thead>
<tbody>
{oidata &&
    oidata.map(item => (
        <tr return key={item.order}>
        <td>{item.id}</td>
        <td>{item.date}</td>
        <td>{item.user}</td>
        <td>{item.type}</td>
        <td>{item.customer}</td>
        <td><a onClick={() => { Removefunction(item.order) }} className="btn btn-danger">- Delete Entry</a></td>
        </tr>
    ))
}
</tbody>
</table>
</div>
</div>
</div>
    );
}

export default EmpInfo;