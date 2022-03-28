import { LightningElement, track } from 'lwc';

export default class ComplexUI extends LightningElement {

    @track isModalOpen = false;

	//add eventListner to handle keystrokes
	connectedCallback() {
		document.addEventListener("keydown", this.handleEscapeKey.bind(this));
	}    
	//sets the isModalOpen property to true, indicating that the Modal is Open
	showModal() {
		this.isModalOpen = true;
	} 
	//sets the isModalOpen property to false, indicating that the Modal is Closed
	closeModal() {
		this.isModalOpen = false;
	}    
	handleEscapeKey(event){
		//check if the escape key was pressed and if the modal is open
		if(event.key === 'Escape' && this.isModalOpen){
			//close the modal
			this.closeModal();
		}
	} 
    
	/* 
	can be used instead of the above two methods - showModal() & closeModal()
	just toggles the isModalOpen property - true if false, false if true 
	*/
	toggleModal() {
		this.isModalOpen = !this.isModalOpen;
	}

	//compute the CSS classes of the Modal(popup) based on the value of isModalOpen property
	get modalClass() {
		return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" : ""}`;
	}

	//compute the CSS classes of the Modal Backdrop(grey overlay) based on the value of isModalOpen property
	get modalBackdropClass() {
		return `slds-backdrop ${this.isModalOpen ? "slds-backdrop_open" : ""}`;
	}    
}