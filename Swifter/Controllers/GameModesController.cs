using Microsoft.AspNetCore.Mvc;
using Swifter.Data;
using Swifter.Data.Models;

namespace Swifter.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameModesController : ControllerBase
    {
        private SwifterDbContext _context;
        public GameModesController(SwifterDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<IEnumerable<GameMode>> GetAllGameModes()
        {
            return _context.GameModes;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetAllGameModes(int id)
        {
            var gameMode = _context.GameModes.FirstOrDefault(x => x.Id == id);
            if (gameMode == null)
            {
                return BadRequest("Invalid id");
            }
            return Ok(gameMode);
        }

    }
}