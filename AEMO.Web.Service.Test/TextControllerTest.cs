using System.Collections.Generic;
using AEMO.Web.Service.Controllers;
using AEMO.Web.Service.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;


namespace AEMO.Web.Service.Test
{
    [TestClass]
    public class TextControllerTest
    {
        [TestMethod]
        public void MatchString()
        {
            var expected = new MatchTextResultModel()
            {
                Total = 2,
                Positions = new List<int>() { 0, 13}
            };

            var controller = new TextController();
            var actual = controller.MatchString("Hello world! Hello AEMO!","HELLO");

            Assert.AreEqual(expected.Total, actual.Total);
            CollectionAssert.AreEqual(expected.Positions, actual.Positions);
        }
    }
}
