
namespace MovieTutorial.MovieDB.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("MovieDB/MovieCast"), Route("{action=index}")]
    public class MovieCastController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/MovieDB/MovieCast/MovieCastIndex.cshtml");
        }
    }
}