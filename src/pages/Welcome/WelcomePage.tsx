import BookList from "../../components/BookList";
import favouriteBooks from "../../components/FavouriteBooks";

const WelcomePage = () =>{
    return(
        <div>
      <h1>Welcome Page</h1>
      <BookList books={favouriteBooks}/>
    </div>
    )
}
export default WelcomePage;