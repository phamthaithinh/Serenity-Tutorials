
namespace MovieTutorial.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Customer"), Route("{action=index}")]
    public class CustomerController : Controller
    {
        [PageAuthorize(Northwind.PermissionKeys.Customer.View)]
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Customer/CustomerIndex.cshtml");
        }
    }
}