from flask import Flask, jsonify, render_template
import pandas as pd

df = pd.read_csv("Student_data.csv")
df2 = pd.read_csv("Grades_data.csv")
df3 = pd.read_csv("Finance_data.csv")

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


# @app.route("/get-datachart")
# def get_datachart():
#     classes = df["Faculty_Name"].value_counts().index
#     values = df["Faculty_Name"].value_counts().values

#     data = []

#     for i in range(len(classes)):
#         data.append({"class": classes[i], "value": int(values[i])})

#     return jsonify(data)


@app.route("/get-datatable")
def get_datatable():
    classes = df["Major"].value_counts().index
    values = df["Major"].value_counts().values

    datab = []

    for i in range(len(classes)):
        datab.append({"class": classes[i], "value": int(values[i])})

    return jsonify(datab)


# @app.route("/get-databar")
# def get_databar():
#     classes = df3["Date"]
#     values = df3["Profits"]

#     datac = []

#     for i in range(len(classes)):
#         datac.append({"class": classes[i], "value": int(values[i])})

#     return jsonify(datac)




# Pie2
@app.route("/get-datapie")
def get_datapie():
    classes = df["Gender"].value_counts().index
    values = df["Gender"].value_counts().values

    datab = []

    for i in range(len(classes)):
        datab.append({"class": classes[i], "value": int(values[i])})

    return jsonify(datab)


# bar horizontal


@app.route('/get-dataFunnal')
def get_dataFunnal():
    # Assuming df is your DataFrame with the provided data
   category = df["Faculty_Name"].value_counts().index
   value = df["Faculty_Name"].value_counts().values

   dataa= []

   for i in range(len(category)):
        dataa.append({"category": category[i], "value": int(value[i])})
   return jsonify(dataa)



# Finishbar
@app.route('/get_datafinish')
def get_datafinish():
    data_grouped = df2['Grade_letter'].value_counts()
    data = []
    for i in range(len(data_grouped.index)):
        dict_d = {}
        dict_d['country'] = data_grouped.index[i]
        dict_d['value'] = int(data_grouped.values[i])
        data.append(dict_d)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
