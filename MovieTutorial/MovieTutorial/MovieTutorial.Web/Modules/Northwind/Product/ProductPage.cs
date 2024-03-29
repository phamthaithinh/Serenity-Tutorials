
namespace MovieTutorial.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Product"), Route("{action=index}")]
    public class ProductController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Product/ProductIndex.cshtml");
        }
    }
}