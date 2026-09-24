import { toast } from 'react-toastify';

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
    }
    else{
        stroedBookData.push(id)

        const setData = JSON.stringify(stroedBookData);
        localStorage.setItem("readList" ,setData);
        toast.success("Read Add Complete!")
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
    }
    else{
        storeWishlistData.push(id)

        const setWishlistData = JSON.stringify(storeWishlistData);
        localStorage.setItem("WishlistBooks" ,setWishlistData);
        toast.success("Read Add Complete!")
    }
}

export {addToStroedDB, getStoredBook, addToWishlistBooks, getWishlistBooks}