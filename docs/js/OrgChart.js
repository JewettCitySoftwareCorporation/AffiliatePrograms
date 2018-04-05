google.load('visualization', '1', {packages:['orgchart']});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('string', 'Manager');
        data.addColumn('string', 'ToolTip');
        data.addRows([
			  [{v:'Owner', f:'<div style="color:red; font-style:italic">Owner<br /><p style="color:blue;">Community&nbsp;|&nbsp;StakeHolders&nbsp;|&nbsp;Investors</p></div>'}, '', 'Owner'],
			  [{v:'VP', f:'<div style="color:red; font-style:italic">Vice President</div>'}, 'Owner', 'VP'],
			  [{v:'CEO', f:'<div style="color:red; font-style:italic">CEO<br /><h3 style="color:black; font-style:bold">Justin&nbsp;Jackson</h3></div>'}, 'VP', 'Chief Executive Officer'],
			  [{v:'COO', f:'<div style="color:red; font-style:italic">COO<br/><h3 style="color:black; font-style:bold">Zackery&nbsp;Cooper</h3></div>'}, 'VP', 'Chief Operations Officer'],
			  [{v:'CFO', f:'<div style="color:red; font-style:italic">CFO<br/><h3 style="color:black; font-style:bold">Randy&nbsp;Helgeson</h3></div>'}, 'VP', 'Chief Financial Officer'],
			  [{v:'CTO', f:'<div style="color:red; font-style:italic">CTO<br/><h3 style="color:black; font-style:bold">Luke&nbsp;Shields</h3></div>'}, 'VP', 'Chief Technology Officer'],
				[{v:'PT1', f:'<div style="color:green; font-style:italic">Project&nbsp;Team&nbsp;#1</div>'}, 'CEO', 'Project Team #1'],
        [{v:'EMP1', f:'<div style="color:green; font-style:italic">Employee&nbsp;#1</div>'}, 'PT1', 'Employee #1'],
				[{v:'EMP2', f:'<div style="color:green; font-style:italic">Employee&nbsp;#2</div>'}, 'PT1', 'Employee #2'],
				[{v:'EMP3', f:'<div style="color:green; font-style:italic">Employee&nbsp;#3</div>'}, 'PT1', 'Employee #3'],
				[{v:'MD', f:'<div style="color:violet;">Marketing&nbsp;Director</div><br/><h6 style="color:orange;">Open Position</h6>'}, 'CFO', 'Marketing Director'],
        // [{v:'LD1', f:'<div style="color:violet; font-style:italic">Lead Developer<br/><h3 style="color:black; font-style:bold">Luke@jcsc.biz</h3></div>'}, 'CTO', 'Luke Shields'],
        //[{v:'LD2', f:'<div style="color:violet; font-style:italic">IT Staff<br/><h3 style="color:black; font-style:bold">Staff@jcsc.biz</h3></div>'}, 'LD1', 'Staff@JCSC.biz'],
        [{v:'mi1', f:'<div style="color:green; font-style:italic">Marketing&nbsp;Intern</div>'}, 'MD', 'Marketing Intern'],
        [{v:'mi2', f:'<div style="color:green; font-style:italic">Marketing&nbsp;Intern</div>'}, 'MD', 'Marketing Intern'],
			  [{v:'HTG', f:'<div style="color:red; font-style:italic">HR&nbsp;Guru</div>'}, 'Owner', 'HR Guru']					  
        ]);
        var chart = new google.visualization.OrgChart(document.getElementById('chart_div'));
        chart.draw(data, {allowHtml:true});
      }
