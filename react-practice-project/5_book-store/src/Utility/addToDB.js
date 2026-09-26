import { toast } from 'react-toastify';
// SweetAlert2
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const getStoredBook = () => {

    const stroedBook = localStorage.getItem("readList");

    if(stroedBook){
        const StroedBookData = JSON.parse(stroedBook);
        return StroedBookData;
    }
    else return [];
}

const addToStroedDB = (id) => {
    const stroedBookData = getStoredBook();

    if(stroedBookData.includes(id)){
        toast.error("Already Exsixt!");

        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
    }
    else{
        stroedBookData.push(id)

        const setData = JSON.stringify(stroedBookData);
        localStorage.setItem("readList" ,setData);
        toast.success("Read Add Complete!")

        // SweetAlert2
        Swal.fire({
        title: "Good Job!",
        icon: "success",
        draggable: true
        });
    }
}

const getWishlistBooks = () => {
    const storeWishlistBooks = localStorage.getItem("WishlistBooks");

    if(storeWishlistBooks)
    {
        const storeWishlistBooksData = JSON.parse(storeWishlistBooks);
        return storeWishlistBooksData;
    }
    else return [];
}

const addToWishlistBooks = (id) => {
    const storeWishlistData = getWishlistBooks();

    if(storeWishlistData.includes(id))
    {
        toast.error("Already Exsixt!");

        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href=\"#\">Why do I have this issue?</a>"
        });
    }
    else{
        storeWishlistData.push(id)

        const setWishlistData = JSON.stringify(storeWishlistData);
        localStorage.setItem("WishlistBooks" ,setWishlistData);
        toast.success("Read Add Complete!")

        // SweetAlert2
        Swal.fire({
        title: "Good Job!",
        icon: "success",
        draggable: true
        });
    }
}

export {addToStroedDB, getStoredBook, addToWishlistBooks, getWishlistBooks}