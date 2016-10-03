// Euler angles degrees
var roll = 0; // Roll angle
var roll_limit = 0;
var pitch = 0; // Pitch angle
var yaw = 0; // Yaw angle
var bearing = 0;
var distance = 0;
var yaw_last = 0;
var yaw_limit = 0;

var speed = 0; // Actual speed value
var speed_last = 0; // Previous speed value
var speed_limit = 0; // Simulation speed limit reached?

var speed_top_value = 20; // Top initial scale value
var speed_bottom_value = -20; // Bottom initial scale value

var altitude = 0; // Actual altitude value
var altitude_last = 0; // Previous altitude value
var altitude_limit = 0; // Simulation altitude limit reached?

var scale_top = 132;
var scale_bottom = 564;
var scale_step = 18; // px

var scale_value_top = 218;
var scale_value_bottom = 668;

var scale_altitude_value_top = 142;
var scale_altitude_value_bottom = 592;

var altitude_top_value = 20; // Top initial scale value
var altitude_bottom_value = -20; // Bottom initial scale value

var scale_compass_step = 60; // px

var scale_compass_value_left = 48; // px
var scale_compass_value_right = 528; // px

var compass_left_value = 315; // deg
var compass_right_value = 45; // deg

var vertical = 0;

function moveSpeed (){
/*
	//Simulate speed change
	if (speed_limit == 0)
	{
		if (speed < 100)
		{
			speed++; // Increase speed
		}
		else
		{
			speed_limit = 1; // Speed limit reached
		}
	}
	else // Speed limit reached!
	{
		if (speed > 0)
		{
			speed--; // Decrease speed
		}
		else
		{
			speed_limit = 0; // Restart speed loop
		}	
	}
*/
	var i;
	var n;
	var speed_diff = Math.abs((speed * (scale_step / 2)) - (speed_last * (scale_step / 2)));
	var path_scale;
	var cmdRegEx;
	var commands;
	var text_scale;
	var text_y;

	// Check speed increasing
	if (speed > speed_last)
	{
		for (n = 0; n < speed_diff; n++)
		{
			for (i = 0; i < 25; i++) 
			{
		
				path_scale = $("#speed-scale1").children()[i]; // Get attribute d
		
				// Extract and parse d attribute
				cmdRegEx = /-?\d+(\.\d+)?/ig;
    			var path_scale_attr_d = $(path_scale).attr('d');
				
    			if (!path_scale_attr_d) return;
    			commands = path_scale_attr_d.match(cmdRegEx);				
				
				// commands = $(path_scale).attr('d').match(cmdRegEx);
		
				commands[1]++;
				
				if (commands[1] > scale_bottom + scale_step)		
				{
					commands[1] = scale_top;
				}
				
				$(path_scale).attr('d', 'm'+ commands); // Modify attribute d			
			}
			
			// Get speed value1
			text_scale = $("#tspan4674"); // Get text tspan
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_value_bottom)
			{
				text_y = scale_value_top;
				
				speed_top_value+= 10;
				speed_bottom_value+= 10;
				$(text_scale).text(speed_top_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value2
			text_scale = $("#tspan4672"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_value_bottom)
			{
				text_y = scale_value_top;

				speed_top_value+= 10;
				speed_bottom_value+= 10;
				$(text_scale).text(speed_top_value.toString());				
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value3
			text_scale = $("#tspan4666"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_value_bottom)
			{
				text_y = scale_value_top;

				speed_top_value+= 10;
				speed_bottom_value+= 10;
				$(text_scale).text(speed_top_value.toString());				
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value4
			text_scale = $("#tspan4668"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_value_bottom)
			{
				text_y = scale_value_top;

				speed_top_value+= 10;
				speed_bottom_value+= 10;
				$(text_scale).text(speed_top_value.toString());				
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value5
			text_scale = $("#tspan4670"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_value_bottom)
			{
				text_y = scale_value_top;

				speed_top_value+= 10;
				speed_bottom_value+= 10;
				$(text_scale).text(speed_top_value.toString());				
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y																		
		}
	}
	else if (speed < speed_last) // Check speed decreasing
	{
		for (n = 0; n < speed_diff; n++)
		{	
			for (i = 0; i < 25; i++) 
			{
		
				path_scale = $("#speed-scale1").children()[i]; // Get attribute d
		
				// Extract and parse d attribute
				cmdRegEx = /-?\d+(\.\d+)?/ig;
    			var path_scale_attr_d = $(path_scale).attr('d');
				
    			if (!path_scale_attr_d) return;
    			commands = path_scale_attr_d.match(cmdRegEx);				
				
//				commands = $(path_scale).attr('d').match(cmdRegEx);
		
				commands[1]--;
				
				if (commands[1] < scale_top)		
				{
					commands[1] = scale_bottom + scale_step;
				}
				
				$(path_scale).attr('d', 'm'+ commands); // Modify attribute d			
			}
			
			// Get speed value1
			text_scale = $("#tspan4674"); // Get text tspan
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_value_top)
			{
				text_y = scale_value_bottom;
				
				speed_top_value-= 10;
				speed_bottom_value-= 10;
				$(text_scale).text(speed_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value2
			text_scale = $("#tspan4672"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_value_top)
			{
				text_y = scale_value_bottom;
				
				speed_top_value-= 10;
				speed_bottom_value-= 10;
				$(text_scale).text(speed_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value3
			text_scale = $("#tspan4666"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_value_top)
			{
				text_y = scale_value_bottom;
				
				speed_top_value-= 10;
				speed_bottom_value-= 10;
				$(text_scale).text(speed_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value4
			text_scale = $("#tspan4668"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_value_top)
			{
				text_y = scale_value_bottom;
				
				speed_top_value-= 10;
				speed_bottom_value-= 10;
				$(text_scale).text(speed_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value5
			text_scale = $("#tspan4670"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_value_top)
			{
				text_y = scale_value_bottom;
				
				speed_top_value-= 10;
				speed_bottom_value-= 10;
				$(text_scale).text(speed_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y			
		}	
	}
	
	// Update speed string
	var speed_text = $("#speed-str");
	$(speed_text).text(parseInt(speed));		
	
	speed_last = speed; // Store actual speed value
}
////////////////////////////////////////////////////////////////////////////	

function moveAltitude (){
/*
	//Simulate altitude change
	if (altitude_limit == 0)
	{
		if (altitude < 1000)
		{
			altitude++; // Increase altitude
		}
		else
		{
			altitude_limit = 1; // Altitude limit reached
		}
	}
	else // Altitude limit reached!
	{
		if (altitude > 0)
		{
			altitude--; // Decrease altitude
		}
		else
		{
			altitude_limit = 0; // Restart altitude loop
		}	
	}
*/	

	var i;
	var n;
	var altitude_diff = Math.abs((altitude * (scale_step / 2)) - (altitude_last * (scale_step / 2)));
	var path_scale;
	var cmdRegEx;
	var commands;
	var text_scale;
	var text_y;	

	// Check altitude increasing
	if (altitude > altitude_last)
	{
		for (n = 0; n < altitude_diff; n++)
		{
			for (i = 0; i < 25; i++) 
			{
		
				path_scale = $("#altitude-scale1").children()[i]; // Get attribute d
		
				// Extract and parse d attribute
				cmdRegEx = /-?\d+(\.\d+)?/ig;
    			var path_scale_attr_d = $(path_scale).attr('d');
				
    			if (!path_scale_attr_d) return;
    			commands = path_scale_attr_d.match(cmdRegEx);				
				
//				commands = $(path_scale).attr('d').match(cmdRegEx);
		
				commands[1]++;
				
				if (commands[1] > scale_bottom + scale_step)		
				{
					commands[1] = scale_top;
				}
				
				$(path_scale).attr('d', 'm'+ commands); // Modify attribute d			
			}
			
			// Get altitude value1
			text_scale = $("#tspan4674-7"); // Get text tspan
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_altitude_value_bottom)
			{
				text_y = scale_altitude_value_top;
				
				altitude_top_value+= 10;
				altitude_bottom_value+= 10;
				$(text_scale).text(altitude_top_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value2
			text_scale = $("#tspan4672-1"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_altitude_value_bottom)
			{
				text_y = scale_altitude_value_top;
				
				altitude_top_value+= 10;
				altitude_bottom_value+= 10;
				$(text_scale).text(altitude_top_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value3
			text_scale = $("#tspan4666-8"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_altitude_value_bottom)
			{
				text_y = scale_altitude_value_top;
				
				altitude_top_value+= 10;
				altitude_bottom_value+= 10;
				$(text_scale).text(altitude_top_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value4
			text_scale = $("#tspan4668-5"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_altitude_value_bottom)
			{
				text_y = scale_altitude_value_top;
				
				altitude_top_value+= 10;
				altitude_bottom_value+= 10;
				$(text_scale).text(altitude_top_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get speed value5
			text_scale = $("#tspan4670-6"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y++;
			
			if (text_y > scale_altitude_value_bottom)
			{
				text_y = scale_altitude_value_top;
				
				altitude_top_value+= 10;
				altitude_bottom_value+= 10;
				$(text_scale).text(altitude_top_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y			
		}
	}
	else if (altitude < altitude_last) // Check altitude decreasing
	{
		for (n = 0; n < altitude_diff; n++)
		{	
			for (i = 0; i < 25; i++) 
			{
		
				path_scale = $("#altitude-scale1").children()[i]; // Get attribute d
		
				// Extract and parse d attribute
				cmdRegEx = /-?\d+(\.\d+)?/ig;
    			var path_scale_attr_d = $(path_scale).attr('d');
				
    			if (!path_scale_attr_d) return;
    			commands = path_scale_attr_d.match(cmdRegEx);
								
//				commands = $(path_scale).attr('d').match(cmdRegEx);
		
				commands[1]--;
				
				if (commands[1] < scale_top)		
				{
					commands[1] = scale_bottom + scale_step;
				}
				
				$(path_scale).attr('d', 'm'+ commands); // Modify attribute d			
			}

			// Get altitude value1
			text_scale = $("#tspan4674-7"); // Get text tspan
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_altitude_value_top)
			{
				text_y = scale_altitude_value_bottom;
				
				altitude_top_value-= 10;
				altitude_bottom_value-= 10;
				$(text_scale).text(altitude_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get altitude value2
			text_scale = $("#tspan4672-1"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_altitude_value_top)
			{
				text_y = scale_altitude_value_bottom;
				
				altitude_top_value-= 10;
				altitude_bottom_value-= 10;
				$(text_scale).text(altitude_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get altitude value3
			text_scale = $("#tspan4666-8"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_altitude_value_top)
			{
				text_y = scale_altitude_value_bottom;
				
				altitude_top_value-= 10;
				altitude_bottom_value-= 10;
				$(text_scale).text(altitude_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get altitude value4
			text_scale = $("#tspan4668-5"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_altitude_value_top)
			{
				text_y = scale_altitude_value_bottom;
				
				altitude_top_value-= 10;
				altitude_bottom_value-= 10;
				$(text_scale).text(altitude_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
			
			// Get altitude value5
			text_scale = $("#tspan4670-6"); // Get text
			text_y = $(text_scale).attr('y'); // Get attribute y
			
			text_y--;
			
			if (text_y < scale_altitude_value_top)
			{
				text_y = scale_altitude_value_bottom;
				
				altitude_top_value-= 10;
				altitude_bottom_value-= 10;
				$(text_scale).text(altitude_bottom_value.toString());
			}
			
			$(text_scale).attr('y', text_y); // Modify attribute y
		}		
			
	}
	
	// Update altitude string
	var altitude_text = $("#altitude-str");
	$(altitude_text).text(parseInt(altitude));	
	
	altitude_last = altitude; // Store actual altitude value
}

function zeroPad(num, places) {
  var zero = places - num.toString().length + 1;
  return Array(+(zero > 0 && zero)).join("0") + num;
}

function moveCompass (){

	var n;
	var yaw_diff; // = Math.abs((yaw * (scale_compass_step / 15)) - (yaw_last * (scale_compass_step / 15)));
	var text_scale;
	var text_x;
	var font_size_36 = "font-size:38.00000123px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:center;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Consolas;-inkscape-font-specification:Consolas";
	var font_size_32 = "font-size:32px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:center;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Consolas;-inkscape-font-specification:Consolas";
	var font_size_20 = "font-size:20px;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;text-align:center;line-height:125%;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:middle;fill:#ffffff;fill-opacity:1;stroke:none;display:inline;font-family:Consolas;-inkscape-font-specification:Consolas";


	if (yaw < 0)
	{
		yaw+= 360;
	}
	
	if ((yaw < 90) && (yaw_last > 270))
	{
		yaw+= 360;
	}

	if ((yaw_last < 90) && (yaw > 270))
	{
		yaw_last+= 360;
	}

	yaw_diff = Math.abs((yaw * (scale_compass_step / 15)) - (yaw_last * (scale_compass_step / 15)));

	// Check yaw increasing
	if (yaw > yaw_last)
	{
		for (n = 0; n < yaw_diff; n++)
		{	
			// Get compass value1
			text_scale = $("#tspan4756"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute x
			
			// Get compass value2
			text_scale = $("#tspan4792"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value1
			text_scale = $("#tspan4794"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute x
			
			// Get compass value1
			text_scale = $("#tspan4790"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value1
			text_scale = $("#tspan4828"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value1
			text_scale = $("#tspan4830"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value7
			text_scale = $("#tspan4782"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x--;
			
			if (text_x < scale_compass_value_left + (scale_compass_step / 2))
			{
				text_x = scale_compass_value_right - (scale_compass_step / 2);
				
				compass_left_value+= 15;
				compass_right_value+= 15;
				
				if (compass_left_value >= 360)
				{
					compass_left_value = 0;
				}
				
				if (compass_right_value >= 360)
				{
					compass_right_value = 0;
				}
				
				if (compass_right_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_right_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_right_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_right_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_right_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_right_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_right_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_right_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
//				else if (compass_right_value == 360)
//				{
//					$(text_scale).attr('y', 52);			
//					$(text_scale).attr('style', font_size_36);						
//					$(text_scale).text('N');				
//				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_right_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y																		
			
//			break;
		}
	}
	else
	{
		for (n = 0; n < yaw_diff; n++)
		{
			// Get compass value1
			text_scale = $("#tspan4756"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute x
			
			// Get compass value2
			text_scale = $("#tspan4792"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value1
			text_scale = $("#tspan4794"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute x
			
			// Get compass value1
			text_scale = $("#tspan4790"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value1
			text_scale = $("#tspan4828"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value1
			text_scale = $("#tspan4830"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y
			
			// Get compass value7
			text_scale = $("#tspan4782"); // Get text tspan
			text_x = $(text_scale).attr('x'); // Get attribute x
			
			text_x++;
			
			if (text_x > scale_compass_value_right - (scale_compass_step / 2))
			{
				text_x = scale_compass_value_left + (scale_compass_step / 2);
				
				compass_left_value-= 15;
				compass_right_value-= 15;
				
				if (compass_left_value < 0)
				{
					compass_left_value = 360 + compass_left_value;
				}
				
				if (compass_right_value < 0)
				{
					compass_right_value = 360 + compass_right_value;
				}
				
				if (compass_left_value == 0)				
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_36);					
					$(text_scale).text('N');
				}
				else if (compass_left_value == 45)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('NE');				
				}
				else if (compass_left_value == 90)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('E');				
				}				
				else if (compass_left_value == 135)
				{
					$(text_scale).attr('y', 52);				
					$(text_scale).attr('style', font_size_32);					
					$(text_scale).text('SE');				
				}
				else if (compass_left_value == 180)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('S');				
				}
				else if (compass_left_value == 225)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('SW');				
				}
				else if (compass_left_value == 270)
				{
					$(text_scale).attr('y', 52);			
					$(text_scale).attr('style', font_size_36);						
					$(text_scale).text('W');				
				}
				else if (compass_left_value == 315)
				{
					$(text_scale).attr('y', 52);
					$(text_scale).attr('style', font_size_32);									
					$(text_scale).text('NW');				
				}
				else
				{
					$(text_scale).attr('y', 48);
					$(text_scale).attr('style', font_size_20);
					$(text_scale).text(zeroPad(compass_left_value, 3));						
				}								
			}
			
			$(text_scale).attr('x', text_x); // Modify attribute y

//			break;																		
		}	
	}
	
	yaw_last = yaw; // Store actual yaw value	
}
////////////////////////////////////////////////////////////////////////////	

function Update (command_roll, command_pitch, command_yaw, command_speed, command_altitude, command_vertical, command_bearing, command_distance) {
	roll = command_roll;
	pitch = 7.2 * command_pitch;
	yaw = Math.round(command_yaw);
	speed = command_speed;
	altitude = command_altitude;
	vertical = command_vertical;
	
	bearing = Math.round(command_bearing);
	distance = Math.round(command_distance);
	
	moveHorizon();
}
////////////////////////////////////////////////////////////////////////////	


//

function setBackground(opacity)
{
	var horizon_world = $('#world-bg');
	$(horizon_world).attr('opacity',opacity);
}

function getBackgroundOpacity()
{
	var horizon_world = $('#world-bg');
	return $(horizon_world).attr('opacity');
}
function moveVSI (){

	var bar_down;
	var bar_down_height;
	var bar_up;
	var bar_up_height;	
	var bar_up_y;

	// Get VSI bar down height
	bar_down = $("#vsi-bar-down"); // Get bar tspan	
	bar_down_height = $(bar_down).attr('height'); // Get attribute height
	
	// Get VSI bar up height / y
	bar_up = $("#vsi-bar-up"); // Get bar tspan	
	bar_up_height = $(bar_up).attr('height'); // Get attribute height	
	bar_up_y = $(bar_up).attr('y'); // Get attribute height	

	// Decend velocity
	if (vertical > 0)
	{
		bar_down_height = vertical * 70.0; // 2m/s -> 140 pixels
		bar_up_height = 0;
		bar_up_y = 354;
	}	
	else // Climb velocity
	{
		bar_up_height = -vertical * 70.0;
		bar_up_y = 354 - bar_up_height;
		bar_down_height = 0;
	}

	
	// Update up / down bars
	$(bar_down).attr('height', bar_down_height); // Modify attribute height
	$(bar_up).attr('height', bar_up_height); // Modify attribute height
	$(bar_up).attr('y', bar_up_y); // Modify attribute height
}
////////////////////////////////////////////////////////////////////////////	

function moveHorizon (){		
	
//	// Increment roll forever
//	roll++;
//	
//	// Simulate roll
//	if (roll > 360)
//	{
//		roll = 0;
//	}

/*	
	//Simulate roll change
	if (roll_limit == 0)
	{
		if (roll < 360)
		{
			roll++; // Increase roll
		}
		else
		{
			roll_limit = 1; // roll limit reached
		}
	}
	else // Roll limit reached!
	{
		if (roll > 0)
		{
			roll--; // Decrease roll
		}
		else
		{
			roll_limit = 0; // Restart roll loop
		}	
	}	
	
	// Simulate pitch
	if (pitch > -300)
	{
		pitch--;
	}
	
//	yaw++;
//	
//	// Simulate yaw
//	if (yaw > 360)
//	{
//		yaw = 0;
//	}
	
	//Simulate yaw change
	if (yaw_limit == 0)
	{
		if (yaw < 360)
		{
			yaw++; // Increase yaw
		}
		else
		{
			yaw_limit = 1; // Yaw limit reached
		}
	}
	else // Yaw limit reached!
	{
		if (yaw > 0)
		{
			yaw--; // Decrease yaw
		}
		else
		{
			yaw_limit = 0; // Restart yaw loop
		}	
	}	
*/

	// Extract SVG elements
	var horizon = $('#world');
	var compass = $('#needle');	
	var roll_indicator = $('#roll');
	var bear = $('#g3701');

	// Rotate horizon
	$(horizon).attr('transform', 'rotate('+ roll +', '+ 289.02946 +', '+ 608.5 +') translate(0, '+ pitch +')');
	
	// Rotate roll indicator
	$(roll_indicator).attr('transform', 'rotate('+ -roll +', '+ 289.02946 +', '+ 356.21884 +')');	
	
	// Rotate compass
	$(compass).attr('transform', 'rotate('+ -yaw +', '+ 155.90601 +', '+ 156.289 +')');
	
	// Rotate bearing
	$(bear).attr('transform', 'rotate('+ -bearing +', '+ 155.90601 +', '+ 156.289 +')');	
	//$(bearing).attr('transform', 'rotate('+ -yaw +', '+ 0 +', '+ 0 +')');	
	
	// Update compass string
	var compass_text = $("#compass-str");
	$(compass_text).text(yaw.toString());		
	
	// Update bearing string
	//var bearing_text = $("#bearing-str");
	var bearing_text = $("#tspan3827");
	$(bearing_text).text(bearing.toString());	
	
	// Update distance string
	//var distance_text = $("#distance-str");
	var distance_text = $("#tspan3831");	
	$(distance_text).text(distance.toString());	
	
	// Update VSI string
	var vsi_text = $("#vsi-str");
	//$(vsi_text).text(vertical.toString());	
	$(vsi_text).text(parseFloat(vertical).toFixed(3));	

	// Scroll speed scale
	moveSpeed();
	
	// Scroll altitude scale
	moveAltitude();	
	
	// Scroll compass scale
	moveCompass();
	
	// Scroll VSI bars
	moveVSI();
	
			
}
////////////////////////////////////////////////////////////////////////////	

function orientationHandler(e)
{	
//	// Extract SVG elements
//	var horizon = $('#world');
//	var compass = $('#needle');
//	var roll_indicator = $('#roll');
//
//	roll = e.beta;
//	pitch = 0; // e.gamma * pitch_coeff;
//	yaw = e.alpha;
//
//	// Rotate horizon
//	$(horizon).attr('transform', 'rotate('+ -roll +', '+ 289.02946 +', '+ 608.5 +') translate(0, '+ pitch +')');
//	
//	// Rotate roll indicator
//	$(roll_indicator).attr('transform', 'rotate('+ roll +', '+ 289.02946 +', '+ 356.21884 +')');	
//	
//	// Rotate compass
//	$(compass).attr('transform', 'rotate('+ (yaw + 90) +', '+ 155.90601 +', '+ 156.289 +')');
//			
//	// Set simulation timeout
//	setTimeout(function(){ orientationHandler();}, 10);	
}


// Set reload on resize	
//$(window).bind('resize', function() {
//    location.reload();
//	if (isFirefox) window.setTimeout(window.location.reload, 100);	 
//});


//$('#pfd').draggable();
//$('#pfd').resizable();

	var isFirefox = (window.navigator.userAgent.toUpperCase().indexOf("FIREFOX")  != -1);
	
// 	$(window).bind('resize', function () {						
// 	 window.location.reload();
// 	 if (isFirefox) window.setTimeout(window.location.reload, 10);
// });
