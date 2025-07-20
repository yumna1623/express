import { useState, useEffect } from 'react'
import { bookBaseUrl } from '../axiosInstance';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
const UserForm = () => {

    const [form, setForm] = useState({
        BookName: '',
        BookTitle: '',
        Author: '',
        SellingPrice: '',
        PublishDate: '',
        Id:''
    });

    const [bookList, setBookList] = useState([]);
    const [isUpdating, setIsUpdating] = useState(false);
    const getAllbookList = async () => {
        try {
            const { data } = await bookBaseUrl.get('booklists');
            setBookList(data?.BookList)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllbookList();
    }, [])


    const handleForm = (e) => {
        const { name, value } = e.target; //object destructing
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleDelete = async (id) => {
        try {
            const { data } = await bookBaseUrl.post("deleteBook", { id: id });

            if (data?.Success) {
                alert(data?.Message);
                getAllbookList();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async () => {
    try {
        if (!form?.BookName || !form?.BookTitle || !form?.Author || !form?.SellingPrice || !form?.PublishDate) {
            alert('All fields are required.');
            return;
        }

        if (isUpdating) {
            const { data } = await bookBaseUrl.put('/updateBook', form);
            if (data?.Success) {
                alert(data?.Message);
                setForm({ BookName: '', BookTitle: '', Author: '', SellingPrice: '', PublishDate: '', Id: '' });
                setIsUpdating(false);
                getAllbookList();
            }
        } else {
            const { data } = await bookBaseUrl.post('/addBook', form);
            if (data?.Success) {
                alert(data?.Message);
                setForm({ BookName: '', BookTitle: '', Author: '', SellingPrice: '', PublishDate: '', Id: '' });
                getAllbookList();
            }
        }
    } catch (error) {
        console.log(error);
    }
};

    const handleUpdate = (data) => {
        setForm({
            BookName: data?.BookName,
            BookTitle: data?.BookTitle,
            Author: data?.Author,
            SellingPrice: data?.SellingPrice,
            PublishDate: data?.PublishDate,
            Id: data?._id
        })
        setIsUpdating(true)
    }

    return (
        <div className='w-full px-5 min-h-[calc(100vh-60px)]'>
            <div className='w-full grid grid-cols-5 gap-5'>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Book Name</label>
                    <input name="BookName" value={form.BookName} onChange={handleForm} type="text" placeholder='Book Name' className='w-full border-2 border-amber-300 outline-none rounded-sm px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Book Title</label>
                    <input name="BookTitle" value={form.BookTitle} onChange={handleForm} type="text" placeholder='Book Title' className='w-full border-2 border-amber-300 outline-none rounded-sm px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Author</label>
                    <input name="Author" value={form.Author} onChange={handleForm} type="text" placeholder='Author' className='w-full border-2 border-amber-300 outline-none rounded-sm px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Selling Price</label>
                    <input name="SellingPrice" value={form.SellingPrice} onChange={handleForm} type="number" placeholder='Selling Price' className='w-full border-2 border-amber-300 outline-none rounded-sm px-2' />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label htmlFor="">Publish Date</label>
                    <input name="PublishDate" value={form.PublishDate} onChange={handleForm} type="date" placeholder='Publish Date' className='w-full border-2 border-amber-300 outline-none rounded-sm px-2' />
                </div>
            </div>
            <div className='w-full flex justify-end mt-3'>
                <button className='bg-amber-400 rounded-sm px-4' onClick={handleSubmit}>Submit</button>
            </div>
            <div className='w-full mt-10'>
                <div className='w-full'>
                    <table className='w-full bg-white divide-y divide-gray-200'>
                        <thead className='bg-gray-50'>
                            <tr>
                                <td className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Book Name</td>
                                <td className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Book Title</td>
                                <td className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Author</td>
                                <td className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Selling Price</td>
                                <td className='tracking-wider px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase'>Publish Date</td>
                            </tr>
                        </thead>
                        <tbody className='bg-white divide-y divide-gray-200'>
                            {bookList?.map((book, index) => {
                                return (
                                    <tr className='hover:bg-gray-200' key={index}>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.BookName}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.BookTitle}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.Author}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.SellingPrice}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>{book?.PublishDate}</td>
                                        <td className='px-6 py-3 whitespace-nowrap'>
                                            <div className='w-20 flex justify-center gap-5'>
                                                <div className='h-8 w-8 flex cursor-pointer justify-center items-center bg-red-100 text-red-600 rounded text-lg' onClick={() => handleDelete(book._id)}>
                                                    <span><MdDelete /></span>
                                                </div>
                                                <div className='h-8 w-8 flex cursor-pointer justify-center items-center bg-green-100 text-green-600 rounded text-lg' onClick={() => handleUpdate(book)}>
                                                    <span><MdModeEdit /></span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserForm