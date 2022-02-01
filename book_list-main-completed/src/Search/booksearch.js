import React from 'react';
import DataTable from 'react-data-table-component';

export default class BookSearch extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            popupText: '',
            popupLeft: '0px',
            data: this.props.bookDetails,
            selectedRow: {},
            columns: [
                { name: 'Title', selector: 'title', sortable: true, },
                { name: 'Author', selector: 'author_name', sortable: true, },
                { name: 'Publisher', selector: 'publisher', sortable: true, }
              ]
        };
    }

    handleRowClicked = (row) =>{
        this.setState({ selectedRow: row})
    }

    renderSelectedRow = (selectedRow) => {
        return(
            <table style={{ width: '100%', border:'1px solid black'}}>
                <tbody>
                    <tr>
                        <td  style={{ textAlign: 'left'}}>Title:</td>
                        <td>{selectedRow.title}</td>
                    </tr>
                    <tr>
                        <td  style={{ textAlign: 'left'}}>Author:</td>
                        <td>{selectedRow.author_name}</td>
                    </tr>
                    <tr>
                        <td  style={{ textAlign: 'left'}}>Publisher:</td>
                        <td>{selectedRow.publisher}</td>
                    </tr>
                    <tr>
                        <td  style={{ textAlign: 'left'}}>Publisher Year: </td>
                        <td> {selectedRow.publish_year}</td>
                    </tr>
                    <tr>
                        <td  style={{ textAlign: 'left'}}>Title Suggest: </td>
                        <td>{selectedRow.title_suggest}</td>
                    </tr>
                    <tr>
                        <td  style={{ textAlign: 'left'}}>Edition Count: </td>
                        <td>{selectedRow.edition_count}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        const { columns, data, selectedRow } = this.state;
        
        return (
            <div className="App" style={{   borderBottom: '2px solid black' }}>
                { Object.keys(selectedRow).length > 0 && 
                    <div >
                        {this.renderSelectedRow(selectedRow)}
                    </div>
                }
                <h2>Results</h2>
                <DataTable
                    title=""
                    columns={columns}
                    data={data}
                    highlightOnHover
                    pagination
                    paginationPerPage={5}
                    onRowClicked={this.handleRowClicked}
                    paginationRowsPerPageOptions={[5, 10, 20, 50]}
                    paginationComponentOptions={{
                    rowsPerPageText: 'Records per page:',
                    rangeSeparatorText: 'out of',
                    }}
                />
            </div>
        );
    }
}