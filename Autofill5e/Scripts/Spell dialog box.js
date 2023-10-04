
var suffix = "";
var thisField = this.getField(event.target.name);
var spellNumber = event.target.name.slice(thisField.name.indexOf("Notes" + 6) );
if(thisField.page == 3) {
  suffix = "P3.SpellsPage.";
}
var actualNameField = this.getField(suffix + "Spell3Name." + spellNumber);
var descField = this.getField(suffix + "Spell3Description." + spellNumber);
var desc = descField.value;
var verbalField = desc.substr(desc.indexOf("Verbal")+ 7, 3);
var somaticField = desc.substr(desc.indexOf("Somatic")+ 8, 3);
var materialField = desc.substr(desc.indexOf("Material")+ 9,desc.indexOf("materialEnd")-(desc.indexOf("Material")+9));
var concentrationField = desc.substr(desc.indexOf("Concentration")+ 14, 3);
var nameField = actualNameField.value;
var detailsField = desc.substr(desc.indexOf("Description")+ 12, desc.indexOf("detailsEnd")-(desc.indexOf("Description")+ 12));

var HelloDlg =
{
	commit: function(dialog) {
		nameField = dialog.store()["name"];
		detailsField = dialog.store()["deta"];
		verbalField = (dialog.store()["verb"]) ? "yes" : "Off";
		somaticField = (dialog.store()["soma"]) ? "yes" : "Off";
		materialField = dialog.store()["mate"];
		concentrationField = (dialog.store()["conc"]) ? "yes" : "Off";
		descField.value = 
        "Verbal:" + verbalField +
        " Somatic:" + somaticField +
        " Material:" + materialField + "materialEnd" +
        " Concentration:" + concentrationField +
        " Name:" + nameField + "nameEnd" +
        " Description:" + detailsField + "detailsEnd";
        actualNameField.value = nameField;
	},
    initialize: function (dialog)
    {
        dialog.load({"verb": verbalField == "yes"});
		dialog.load({"soma": somaticField == "yes"});
		dialog.load({"mate": materialField});
		dialog.load({"conc": concentrationField == "yes"});
		dialog.load({"name": nameField});
		dialog.load({"deta": detailsField});
    },
	
    description:
    {
        elements:
        [
            {
                type: "view",
                elements:
                [
                    {
                        type: "view",
                        align_children: "align_row",
                        elements:
                        [
                            {
                                item_id: "verb",
                                name: "Verbal",
                                type: "check_box",
                            },
                            {
                                item_id: "soma",
                                name: "Somatic",
                                type: "check_box",
                            },
                            {
                                item_id: "conc",
                                name: "Concentration",
                                type: "check_box",
                            },
                        ]
                    },
					{
						type: "view",
                        align_children: "align_row",
						elements: 
						[
							{
								type: "static_text",
								name: "Material:",
							},
							{
								type: "edit_text",
								item_id: "mate",
								name: "Material",
								width: 100,
								height: 21,
							},
						],
					},
                  	{
						type: "view",
						name: "Details",
						elements: // Child element array
						[
							{
								type: "cluster",
								name: "Spell name",
								elements: 
								[
									{
										type: "edit_text",
										item_id: "name",
										name: "Spell name",
										width: 200,
									},
								]
							},
							{
								type: "cluster",
								name: "Spell details",
								elements:
								[
									{
										type: "edit_text",
										item_id: "deta",
										name: "Spell details",
										multiline: true,
										width: 400,
										height: 300,
									},
								]
							},
						
						]
					},
				]
            },
			
			{
				type: "ok_cancel",
				ok_name: "Add",
				cancel_name: "Discard",
				alignment: "align_right"
			}
        ]
    }
};        

app.execDialog(HelloDlg);    

