import React, { Component } from "react";
import moment from "moment";
import { ReactAgenda, ReactAgendaCtrl, Modal } from "react-agenda";

// items import
import { items } from "../utils/items";

// colors import
import { colors } from "../utils/colors";

// current date
import { now } from "../utils/items";

class Agenda extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selected: [],
      cellHeight: 60 / 4,
      showModal: false,
      locale: "en",
      rowsPerHour: 4,
      numberOfDays: 4,
      startDate: new Date(),
    };
    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
    this.changeView = this.changeView.bind(this);

    this.handleRangeSelection = this.handleRangeSelection.bind(this);
    this.handleItemEdit = this.handleItemEdit.bind(this);

    // crud
    this.addNewEvent = this.addNewEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.editEvent = this.editEvent.bind(this);
  }

  componentDidMount() {
    this.setState({ items: items });
  }

  componentDidUpdate(next, last) {
    if (next.items) {
      this.setState({ items: next.items });
    }
  }

  zoomIn() {
    var num = this.state.cellHeight + 15;
    this.setState({ cellHeight: num });
  }

  zoomOut() {
    var num = this.state.cellHeight - 15;
    this.setState({ cellHeight: num });
  }

  // toggle modal open
  _openModal() {
    this.setState({ showModal: true });
  }

  // close modal
  _closeModal(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    this.setState({ showModal: false });
  }

  // change view based on selected number of days
  changeView(days, event) {
    this.setState({ numberOfDays: days });
  }

  // add new event
  addNewEvent(items, newItems) {
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  // edit an events
  editEvent(items, item) {
    this.setState({ showModal: false, selected: [], items: items });
    this._closeModal();
  }

  // remove an event
  removeEvent(items, item) {
    this.setState({ items: items });
  }

  // toggle modal for editing an event
  handleItemEdit(item, openModal) {
    if (item && openModal === true) {
      this.setState({ selected: [item] });
      return this._openModal();
    }
  }

  // cell selection
  handleCellSelection(item, openModal) {
    if (this.state.selected && this.state.selected[0] === item) {
      return this._openModal();
    }
    this.setState({ selected: [item] });
  }

  // range selection configs
  handleRangeSelection(selected) {
    this.setState({ selected: selected, showCtrl: true });
    this._openModal();
  }

  // change in any of the items
  handleItemChange(items, item) {
    this.setState({ items: items });
  }

  // date fix / selection
  handleDateRangeChange(startDate, endDate) {
    this.setState({ startDate: startDate });
  }

  // resizing item
  handleItemSize(items, item) {
    this.setState({ items: items });
  }

  render() {
    // For a custom component

    // const AgendaItem = function (props) {
    //   console.log(" item component props", props);
    //   return (
    //     <div
    //       style={{ display: "block", position: "absolute", background: "#FFF" }}
    //     >
    //       {props.item.name}{" "}
    //       <button onClick={() => props.edit(props.item)}>Edit </button>
    //     </div>
    //   );
    // };
    return (
      <div className="content-expanded">
        <div className="control-buttons">
          <button className="button-control" onClick={this.zoomIn}>
            {" "}
            <i className="zoom-plus-icon"></i>{" "}
          </button>
          <button className="button-control" onClick={this.zoomOut}>
            {" "}
            <i className="zoom-minus-icon"></i>{" "}
          </button>
          <button className="button-control" onClick={this._openModal}>
            {" "}
            <i className="schedule-icon"></i>{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 7)}
          >
            {" "}
            {moment.duration(7, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 4)}
          >
            {" "}
            {moment.duration(4, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 3)}
          >
            {" "}
            {moment.duration(3, "days").humanize()}{" "}
          </button>
          <button
            className="button-control"
            onClick={this.changeView.bind(null, 1)}
          >
            {" "}
            {moment.duration(1, "day").humanize()}{" "}
          </button>
        </div>

        <ReactAgenda
          // to include a custom event card component design
          //  itemComponent={AgendaItem}
          minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
          maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
          startDate={this.state.startDate}
          startAtTime={8}
          endAtTime={23}
          cellHeight={this.state.cellHeight}
          locale="en"
          items={this.state.items}
          numberOfDays={this.state.numberOfDays}
          headFormat={"ddd DD MMM"}
          rowsPerHour={this.state.rowsPerHour}
          itemColors={colors}
          helper={true}
          view="calendar"
          autoScale={false}
          fixedHeader={true}
          onRangeSelection={this.handleRangeSelection.bind(this)}
          onChangeEvent={this.handleItemChange.bind(this)}
          onChangeDuration={this.handleItemSize.bind(this)}
          onItemEdit={this.handleItemEdit.bind(this)}
          onCellSelect={this.handleCellSelection.bind(this)}
          onItemRemove={this.removeEvent.bind(this)}
          onDateRangeChange={this.handleDateRangeChange.bind(this)}
        />
        {this.state.showModal ? (
          <Modal clickOutside={this._closeModal}>
            <div className="modal-content">
              <ReactAgendaCtrl
                items={this.state.items}
                itemColors={colors}
                selectedCells={this.state.selected}
                Addnew={this.addNewEvent}
                edit={this.editEvent}
              />
            </div>
          </Modal>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Agenda;
