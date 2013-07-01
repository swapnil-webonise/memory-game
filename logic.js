function GenerateMatrix()
{
	var noOfCell=$('#txtCellText').val();
	var boiler='<table border="1">';
	var i=0,y=0,k=0,noOfClick=0;
	i=noOfCell;
	y=noOfCell;
	no=0;
	while(y>0)
	{
		boiler+='<tr>';
		i=noOfCell;
		while(i>0)
		{
			boiler+='<td valign="center"><div id="div_'+no+'" class="card"></div></td>';
			no++;
			i--;
		}
		boiler+='</tr>';
		y--;
	}
	boiler+='</table>';
	$('#mainDiv').html(boiler);
	no--;
	if((noOfCell*noOfCell)%2==1)
	{
		$('#div_'+no).hide();
	}
	var arr=new Array();
	i=(noOfCell*noOfCell)/2;
	while(i>=1)
	{
		j=Math.round(Math.random()*100);
		if(arr.indexOf(j)==-1)
		{
			arr.push(j);
			arr.push(j);	
		}
		else
		{
			continue;
		}
		i--;
	}
	i=0;
	var temp=0;
	while(i<arr.length)
	{
		j=Math.round(Math.random()*100)%noOfCell;
		temp=arr[j];
		arr[j]=arr[i];
		arr[i]=temp;
		i++;
	}
	$('.card').click(function(){
		if(!$(this).hasClass('on'))
		{
			noOfClick++;
			$('#lblNoOfClick').html('No of Clicks:'+noOfClick);
			i=$(this).attr('id').split('_')[1];
			j=$('#mainDiv .on').length;
			if(j==0)
			{
				$(this).addClass('on').html('<label><b>'+arr[i]+'</b></label>');
			}
			if(j==1)
			{
				k=$('#mainDiv .on').attr('id').split('_')[1];
				if(arr[k]==arr[i])
				{
					$(this).html('<label><b>'+arr[i]+'</b></label>');
					$('#mainDiv .on').fadeOut('slow');
					$(this).fadeOut('slow');
				}
				else
				{
					$('#mainDiv .on').removeClass('on').html('');
					$(this).addClass('on').html('<label><b>'+arr[i]+'</b></label>');
				}
			}
		}
		
	});
}
