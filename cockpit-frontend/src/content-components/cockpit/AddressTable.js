import Loader from "@/theme/components/Loader";
import { barer_authentication } from "@/theme/lib/graphql";
import { gql, useQuery } from "@apollo/client"

const Query = gql `
    {
        employeesAddresses (sort: "empl_id") {
            data {
                attributes {
                    empl_id
                    first_name
                    sir_name
                    full_name
                    position
                    phone
                    mail
                    department {
                        data {
                            attributes {
                                dept_name
                            }
                        }
                    }
                }
            }
        }
    }
`

export default function AddressTable(props) {

    const { loading, error, data } = useQuery(Query, barer_authentication);

    if (error) {
        console.error(error)
        return "Connection Problems"
    }
    if (loading) return <Loader />;

    const addresses = data.employeesAddresses.data;
    console.log(addresses)

    return (
        <table className="table w-full">
            <thead>
                <th>Personalnummer</th>
                <th>Nachname</th>
                <th>Vorname</th>
                <th>Telefon</th>
                <th>E-Mail</th>
                <th>Abteilung</th>
                <th>Position</th>
            </thead>
            <tbody>
                { addresses.map((test) => (
                    <tr>
                        <td>{test.attributes.empl_id}</td>
                        <td>{test.attributes.sir_name}</td>
                        <td>{test.attributes.first_name}</td>
                        <td>{test.attributes.phone}</td>
                        <td>{test.attributes.mail}</td>
                        <td>{test.attributes.department.data.attributes.dept_name}</td>
                        <td>{test.attributes.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}