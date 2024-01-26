﻿using Inventario.Api.Responses;
using Inventario.Entities.Dtos.Users;
using Inventario.Services.Contrats;
using Inventario.Services.Inventories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Inventario.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        { 
            _userService = userService;
        }

        // GET: api/<UserController>
        [HttpGet]
        public async Task<UserListResponse> Get()
        {
            //return await _userService.GetUsersAsync();

            return new UserListResponse
            {
                HasError = false,
                Message = "List of users returned",
                Model = (List<UserDto>)await _userService.GetUsersAsync(),
                RequestId = System.Diagnostics.Activity.Current?.Id
            };

        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public async Task<UserResponse> Get(string id)
        {
            //return await _userService.GetUserAsync(id);
            return new UserResponse
            {
                HasError = false,
                Message = "User returned",
                Model = await _userService.GetUserAsync(id),
                RequestId = System.Diagnostics.Activity.Current?.Id
            };
        }

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] NewUserDto value)
        {
            
            if (ModelState.IsValid)
            {
                IdentityResult result = await _userService.AddUserAsync(value);

                if (result.Succeeded)
                {
                    return Ok(new
                    {
                        hasError = false,
                        message = "User Registered",
                        model = (List<UserDto>)await _userService.GetUsersAsync(),
                        requestId = System.Diagnostics.Activity.Current?.Id
                    });
                }
                else
                {
                    foreach (var error in result.Errors)
                    {
                        ModelState.AddModelError(error.Code, error.Description);

                    }
                    return Ok(new
                    {
                        hasError = true,
                        message = "Bad Request",
                        model = result.Errors,
                        requestId = System.Diagnostics.Activity.Current?.Id
                    });
                }
            }
            else
            {
                return BadRequest(new
                {
                    hasError = true,
                    message = "Bad Request",
                    model = new { title = "Bad Request", message = "Your request is incorrect, verify it" },
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(string id, [FromBody] EditUserDto value)
        {
            
            if (ModelState.IsValid)
            {
                await _userService.EditUserAsync(id, value);
                return Ok(new
                {
                    hasError = false,
                    message = "User Updated",
                    model = (List<UserDto>)await _userService.GetUsersAsync(),
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
            else
            {
                return BadRequest(new
                {
                    hasError = true,
                    message = "Bad Request",
                    model = new { title = "Bad Request", message = "Your request is incorrect, verify it" },
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            
            if (ModelState.IsValid)
            {
                await _userService.DeleteUserAsync(id);
                return Ok(new
                {
                    hasError = false,
                    message = "User Deleted",
                    model = (List<UserDto>)await _userService.GetUsersAsync(),
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
            else
            {
                return BadRequest(new
                {
                    hasError = true,
                    message = "Bad Request",
                    model = new { title = "Bad Request", message = "Your request is incorrect, verify it" },
                    requestId = System.Diagnostics.Activity.Current?.Id
                });
            }
        }
    }
}
